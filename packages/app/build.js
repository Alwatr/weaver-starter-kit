import eleventy from '@11ty/eleventy';
import {createLogger} from '@alwatr/logger';

const logger = createLogger('@alwatr/pmpa-app-build');

async function build() {
  logger.logMethod?.('build');
  const output = new eleventy('site', 'dist', {
    quietMode: true,
  });
  await output.write();
  logger.logOther?.('build-success');
}

build();
