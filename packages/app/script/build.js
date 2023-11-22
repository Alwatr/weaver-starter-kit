import eleventy from '@11ty/eleventy';
import {logger} from './logger.js';
import {eleventyConfig} from './config.js';
import {argv} from 'process';

async function build() {
  logger.logMethod?.('build');
  const output = new eleventy('site', 'dist', {}, eleventyConfig);

  const watchMode = argv.includes('--watch');
  if (watchMode) {
    await output.watch();
  } else {
    await output.write();
    logger.logOther?.('build-success ✅');
  }
}

build();
