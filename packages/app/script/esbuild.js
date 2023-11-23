import {build} from 'esbuild';
import {logger, devMode} from './logger.js';

export async function esbuildBuild() {
  logger.logMethod?.('esbuildBuild');
  try {
    await build({
      entryPoints: ['site/_ts/*.ts'],
      outdir: 'dist/es/',
      logLevel: 'info',
      platform: 'browser',
      target: 'es2018',
      format: 'esm',
      minify: !devMode,
      treeShaking: true,
      sourcemap: devMode,
      bundle: true,
      charset: 'utf8',
      legalComments: 'none',
      splitting: true,
    });
  } catch (err) {
    logger.error('esbuildBuild', err);
  }
}
