import {build} from 'esbuild';
import {logger, devMode} from './logger.js';

export async function esbuildBuild() {
  logger.logMethod?.('esbuildBuild');
  try {
    await build({
      entryPoints: ['src/index.ts'],
      outdir: 'dist/',
      logLevel: 'info',
      platform: 'node',
      target: 'es2018',
      format: 'esm',
      minify: !devMode,
      treeShaking: true,
      sourcemap: true,
      bundle: true,
      charset: 'utf8',
      legalComments: 'none'
    });
  } catch (err) {
    logger.error('esbuildBuild', err);
  }
}
