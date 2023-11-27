import {context} from 'esbuild';
import {logger} from './logger.js';

const srcDir = 'site/_ts';
const outDir = 'dist/es';

export async function generateEsbuildContext({debugMode}) {
  logger.logMethod?.('esbuildContext');

  return context({
    entryPoints: [`${srcDir}/*.ts`],
    logLevel: 'info',
    platform: 'browser',
    target: 'es2018',
    format: 'esm',
    conditions: debugMode ? ['development'] : undefined,
    minify: !debugMode,
    treeShaking: true,
    sourcemap: debugMode,
    sourcesContent: debugMode,
    bundle: true,
    splitting: true,
    charset: 'utf8',
    legalComments: 'none',
    metafile: true,
    outbase: srcDir,
    outdir: outDir,
  });
}
