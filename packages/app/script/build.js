import eleventy from '@11ty/eleventy';
import {logger} from './logger.js';
import {eleventyConfig} from './config.js';
import {postcssBuild} from './postcss.js';
import {esbuildBuild} from './esbuild.js';
import {env} from 'process';

const debugMode = env.NODE_ENV !== 'production';

async function build() {
  logger.logMethod?.('build');
  await esbuildBuild(debugMode);

  const output = new eleventy('site', 'dist', {}, eleventyConfig);
  await output.write();

  await postcssBuild();

  logger.logOther?.('build-success ✅');
}

build();
