import {existsSync} from 'fs';
import {readFile, writeFile, mkdir, readdir} from 'fs/promises';
import {logger} from './logger.js';

import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssVariableCompress from 'postcss-variable-compress';
import tailwindcss from 'tailwindcss';
import postcssNesting from 'tailwindcss/nesting/index.js';

const postCss = postcss([
  postcssImport({root: 'site/_css'}),
  postcssNesting,
  tailwindcss,
  postcssPresetEnv,
  cssnano({
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  }),
  postcssVariableCompress,
]);

export async function postcssBuild() {
  logger.logMethod?.('postcssBuild');
  const inputDir = 'site/_css/';
  const outputDir = 'dist/css/';

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
    const output = (await postCss.process(fileContent, {from: inputFilePath, to: outputFilePath})).css;
    await writeFile(outputFilePath, output, {encoding: 'utf8'});

    const fileSize = new Blob([output]).size / 1024;
    logger.logOther?.(`${outputFilePath}\t${fileSize.toFixed(1)}kb`);
  }
}
