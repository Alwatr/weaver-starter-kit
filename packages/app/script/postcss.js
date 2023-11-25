import {existsSync} from 'fs';
import {readFile, writeFile, mkdir, readdir} from 'fs/promises';
import {productionMode, logger} from './logger.js';

import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssVariableCompress from 'postcss-variable-compress';
import tailwindcss from 'tailwindcss';
import postcssNesting from 'tailwindcss/nesting/index.js';

const postCssPlugins = [postcssImport({root: 'site/_css'}), postcssNesting, tailwindcss];

if (productionMode) {
  postCssPlugins.push(
    postcssPresetEnv,
    postcssVariableCompress,
    cssnano({preset: ['default', {discardComments: {removeAll: true}}]}),
  );
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

  console.log('');
  for (const fileName of dirFileList) {
    if (!fileName.endsWith('.css')) {
      continue;
    }

    const inputFilePath = inputDir + fileName;
    const outputFilePath = outputDir + fileName;

    const fileContent = await readFile(inputFilePath, 'utf8');
    const output = (await postCss.process(fileContent, {from: inputFilePath, to: outputFilePath})).css;
    await writeFile(outputFilePath, output, {encoding: 'utf8'});

    const fileSize = new Blob([output]).size / 1024;
    console.log(`  ${outputFilePath}\t\u001b[36m${fileSize.toFixed(1)}kb\u001b[0m`);
  }
  console.log('');

  const endTime = Date.now();
  console.log(`⚡\u001b[32m Done in ${endTime - startTime}ms\u001b[0m`);
}
