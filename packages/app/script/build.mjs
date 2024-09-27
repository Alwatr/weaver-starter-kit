import {join} from 'path';
import eleventy from '@11ty/eleventy';
import {logger} from './logger.mjs';
import {eleventyConfig} from './config.mjs';
import {argv} from 'process';
import {copyFont} from './font.cjs';

const rootDir = 'site';
const outDir = 'dist';

async function build({watchMode, debugMode}) {
  logger.logMethodArgs?.('build', {watchMode, debugMode});

  logger.logOther?.('📋 Copying assets...');
  const fontName = 'vazirmatn';
  await copyFont(fontName, join(outDir, 'font', fontName));

  const output = new eleventy(rootDir, outDir, {}, eleventyConfig);

  if (watchMode) {
    logger.logOther?.('👀 Watching...');
    output.watch();
  } else {
    logger.logOther?.('🚀 Building...');
    await output.write();
    logger.logOther?.('✅ Done.');
  }
}

const watchMode = argv.includes('--watch');
const debugMode = argv.includes('--debug');

build({
  watchMode,
  debugMode,
});
