import {rm} from 'fs/promises';
import eleventy from '@11ty/eleventy';
import {logger} from './logger.js';
import {eleventyConfig} from './config.js';
import {argv} from 'process';
import {generateEsbuildContext} from './esbuild.js'

const rootDir = 'site';
const outDir = 'dist';

async function build({watchMode, debugMode, cleanMode}) {
  logger.logMethodArgs?.('build', {watchMode, debugMode, cleanMode});

  const esbuildContext = await generateEsbuildContext({debugMode: debugMode})

  if (cleanMode) {
    logger.logOther?.('🧹 Cleaning...');
    await rm(outDir, {recursive: true, force: true});
  }

  const output = new eleventy(rootDir, outDir, {}, eleventyConfig);

  if (watchMode) {
    logger.logOther?.('👀 Watching...');
    esbuildContext.watch();
    output.watch();
  } else {
    logger.logOther?.('🚀 Building...');

    const buildInfo = await esbuildContext.rebuild();
    await esbuildContext.dispose();

    logger.logOther?.('✅ Building ES Done...');

    for (const [outFile, outInfo] of Object.entries(buildInfo.metafile?.outputs ?? {})) {
      const size = (outInfo.bytes / 1024).toFixed(1);
      logger.logOther?.(`📦 ${outFile} ${size}kb`);
    }

    await output.write();
    logger.logOther?.('✅ Done.');
  }
}

const watchMode = argv.includes('--watch');
const debugMode = argv.includes('--debug');
const cleanMode = argv.includes('--clean');

build({
  watchMode,
  debugMode,
  cleanMode,
});
