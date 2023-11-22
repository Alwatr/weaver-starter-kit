import {build} from 'esbuild';
import {logger} from './logger.js';

export async function esbuildBuild(debugMode = false) {
  logger.logMethodArgs?.('esbuildBuild', {debugMode});
  try {
    await build({
      entryPoints: ['site/_ts/*.ts'],
      outdir: 'dist/es/',
      logLevel: 'info',
      platform: 'browser',
      target: 'es2018',
      format: 'esm',
      minify: true,
      treeShaking: true,
      sourcemap: debugMode,
      bundle: true,
      charset: 'utf8',
      legalComments: 'none',
      splitting: true,
    });
  } catch (err) {
    logger.error('esbuildBuild', err);
  }
}
