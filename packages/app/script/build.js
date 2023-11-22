import eleventy from '@11ty/eleventy';
import {logger} from './logger.js';

async function build() {
  logger.logMethod?.('build');
  const output = new eleventy('site', 'dist', {
    configPath: './script/eleventy.config.cjs',
  });
  await output.write();
  logger.logOther?.('build-success');
}

build();
