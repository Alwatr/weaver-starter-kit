import {logger} from './logger.js';
import {esbuildBuild} from './esbuild.js';
import {argv} from 'process';

async function build() {
  logger.logMethod?.('build');

  const watchMode = argv.includes('--watch');
  if (watchMode) {
  } else {
    await esbuildBuild(watchMode);
    logger.logOther?.('build-success ✅');
  }
}

build();
