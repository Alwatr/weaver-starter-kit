import {readJsonFileSync} from '@alwatr/util/node.js';
import {context, build} from 'esbuild';

import {logger, devMode} from './logger.js';

const packageJson = readJsonFileSync('./package.json');

export async function esbuild(watchMode) {
  logger.logProperty?.('packageJson.esbuild', packageJson.esbuild);

  /**
   * @type {import('esbuild').BuildOptions}
   */
  const esbuildOptions = {
    logLevel: 'info',
    platform: 'browser',
    target: 'es2015',
    format: 'iife',
    bundle: true,
    minify: true,
    treeShaking: true,
    sourcemap: devMode,
    sourcesContent: devMode,
    // splitting: true,
    charset: 'utf8',
    legalComments: 'none',
    ...packageJson.esbuild,
  };

  if (watchMode) {
    logger.logOther?.('👀 Watching...');
    const esbuildContext = await context(esbuildOptions);
    esbuildContext.watch();
    return;
  }

  // else
  logger.logOther?.('🚀 Building...');
  await build(esbuildOptions);
  return;
}
