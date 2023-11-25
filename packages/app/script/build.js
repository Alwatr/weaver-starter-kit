import {rm} from 'fs/promises';
import eleventy from '@11ty/eleventy';
import {productionMode, logger} from './logger.js';
import {eleventyConfig} from './config.js';
import {argv} from 'process';

async function build(productionMode, watchMode) {
  logger.logMethodArgs?.('build', {productionMode});

  if (productionMode) {
    logger.logOther?.('cleaning output directory...');
    await rm('dist', {recursive: true, force: true});
  }

  const output = new eleventy('site', 'dist', {}, eleventyConfig);

  if (watchMode) {
    logger.logOther?.('🕵️‍♂️ Watch mode');
    await output.watch();
  } else {
    await output.write();
    logger.logOther?.('👍🏻 build complete');
  }
}

const watchMode = argv.includes('--watch');
build(productionMode, watchMode);
