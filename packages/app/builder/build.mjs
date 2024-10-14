import eleventy from '@11ty/eleventy';
import {logger} from './logger.mjs';
import {eleventyConfig} from './config.mjs';
import {argv} from 'process';
import {rm, mkdir, cp} from 'node:fs/promises';

const srcDir = './src';
const siteDir = `${srcDir}/site/content`;
const staticDir = './static';
const distDir = './dist';

async function build({watchMode, debugMode}) {
  logger.logMethodArgs?.('build', {watchMode, debugMode});

  // logger.logStep?.('build', '🧹 Cleaning up...');
  // await rm(distDir, { recursive: true });
  // await mkdir(distDir);

  logger.logStep?.('build', '📋 Copying assets...');
  await cp(staticDir, distDir, {recursive: true, preserveTimestamps: true, force: true});

  logger.logStep?.('build', '🔨 Building Eleventy...');
  const output = new eleventy(siteDir, distDir, {}, eleventyConfig);

  if (watchMode) {
    logger.logStep?.('build', '👀 Watching...');
    process.env.WATCH_MODE = 'true';
    output.watch();
  } else {
    logger.logStep?.('build', '🚀 Building...');
    await output.write();
    logger.logStep?.('build', '✅ Done.');
  }
}

const watchMode = argv.includes('--watch');
const debugMode = argv.includes('--debug');

build({
  watchMode,
  debugMode,
});
