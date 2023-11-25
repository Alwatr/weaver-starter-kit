import {build} from 'esbuild';
import {logger, productionMode} from './logger.js';

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
      minify: productionMode,
      treeShaking: productionMode,
      sourcemap: !productionMode,
      bundle: true,
      charset: 'utf8',
      legalComments: 'none',
      splitting: true,
    });
  } catch (err) {
    logger.error('esbuildBuild', err);
  }
}
