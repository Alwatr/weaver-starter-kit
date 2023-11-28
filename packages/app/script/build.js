import {rm} from 'fs/promises';
import {join} from 'path';
import eleventy from '@11ty/eleventy';
import {logger} from './logger.js';
import {eleventyConfig} from './config.js';
import {argv} from 'process';
import {esbuild} from './esbuild.js';
import {copyFont} from './assets.js';

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
    esbuild(true);
    output.watch();
  } else {
    logger.logOther?.('🚀 Building...');

    await esbuild(false);
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
