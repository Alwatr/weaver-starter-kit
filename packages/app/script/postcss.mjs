import {existsSync} from 'fs';
import {readFile, writeFile, mkdir, readdir} from 'fs/promises';
import {devMode, logger} from './logger.mjs';

import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssVariableCompress from 'postcss-variable-compress';
import tailwindcss from 'tailwindcss';
import postcssNesting from 'tailwindcss/nesting/index.js';
import postcssViewportUnitFallback from 'postcss-viewport-unit-fallback';

const postCssPlugins = [postcssImport({root: 'site/_css'}), postcssNesting, tailwindcss, postcssViewportUnitFallback, postcssPresetEnv];

if (!devMode) {
  postCssPlugins.push(postcssVariableCompress, cssnano({preset: ['default', {discardComments: {removeAll: true}}]}));
}

const postCss = postcss(postCssPlugins);

export async function postcssBuild() {
  logger.logMethod?.('postcssBuild');
  const inputDir = 'site/_css/';
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

    const inputFilePath = inputDir + fileName;
    const outputFilePath = outputDir + fileName;

    const fileContent = await readFile(inputFilePath, 'utf8');
    const outputContent = (await postCss.process(fileContent, {from: inputFilePath, to: outputFilePath})).css;
    await writeFile(outputFilePath, outputContent, {encoding: 'utf8'});

    const size = (new Blob([outputContent]).size / 1024).toFixed(1);
    logger.logOther?.(`📦 ${outputFilePath} ${size}kb`);
  }

  const endTime = Date.now();
  console.log(`⚡\u001b[32m Done in ${endTime - startTime}ms\u001b[0m`);
}
