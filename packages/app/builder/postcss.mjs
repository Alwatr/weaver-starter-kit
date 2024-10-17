import {existsSync} from 'fs';
import {readFile, writeFile, mkdir, readdir} from 'fs/promises';
import {logger, devMode} from './logger.mjs';

import {join, resolve} from 'node:path';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssVariableCompress from 'postcss-variable-compress';
import tailwindcss from 'tailwindcss';
import postcssNesting from 'tailwindcss/nesting/index.js';
import postcssViewportUnitFallback from 'postcss-viewport-unit-fallback';
import postcssCustomMedia from 'postcss-custom-media';

import {createRequire} from 'module';
const require = createRequire(import.meta.url); // ESM way to access require
const windstylePath = require.resolve('@alwatr/windstyle').replace('/dist/main.cjs', '/');

const basePath = 'src/css/';

const postCssPlugins = [
  postcssImport({
    root: basePath,
    resolve(id) {
      logger.logStep?.('postcssImport', 'resolve', id);
      if (id.startsWith('windstyle/')) {
        if (id.endsWith('/')) id += 'index.css';
        if (!id.endsWith('.css')) id += '.css';
        return resolve(windstylePath, id.replace('windstyle/', 'src/'));
      }
      // else
      return id;
    },
  }),
  postcssNesting(),
  postcssCustomMedia(),
  tailwindcss(),
  postcssViewportUnitFallback(),
  postcssPresetEnv({
    logical: {
      inlineDirection: 'right-to-left',
    },
  }),
];

if (!devMode) {
  postCssPlugins.push(
    postcssVariableCompress(),
    cssnano({
      preset: ['default', {discardComments: {removeAll: true}}],
    }),
  );
}

const postCss = postcss(postCssPlugins);

export async function postcssBuild() {
  logger.logMethod?.('postcssBuild');
  const inputDir = basePath;
  const outputDir = 'dist/css/';
  const startTime = Date.now();

  if (!existsSync(outputDir)) {
    await mkdir(outputDir, {recursive: true});
  }

  const dirFileList = await readdir(inputDir);

  for (const fileName of dirFileList) {
    if (!fileName.endsWith('.css')) {
      continue;
    }

    const inputFilePath = join(inputDir, fileName);
    const outputFilePath = join(outputDir, fileName);

    let outputContent = '';

    /**
     * @type {Buffer}
     */
    let outputBuffer;

    try {
      const fileContent = await readFile(inputFilePath, 'utf8');
      outputContent = (await postCss.process(fileContent, {from: inputFilePath, to: outputFilePath})).css;
    } catch (err) {
      logger.error('postcssBuild', 'postcss_failed', err);
      outputContent = `
        html {
          background-color: #a11;
        }

        html:after {
          content: 'Postcss error!';
          display: block;
          margin-top: 2rem;
          font-size: 1.3rem;
          text-align: center;
        }

        body {
          display: none !important;
        }
      `;
      if (process.env.WATCH_MODE !== 'true') {
        throw err;
      }
    } finally {
      outputBuffer = Buffer.from(outputContent, 'utf8');
      await writeFile(outputFilePath, outputBuffer);
    }

    const size = (outputBuffer.byteLength / 1024).toFixed(1);
    logger.logOther?.(`📦 ${outputFilePath} ${size}kb`);
  }

  const endTime = Date.now();
  console.log(`⚡\u001b[32m Done in ${endTime - startTime}ms\u001b[0m`);
}
