import {definePackage} from '@alwatr/logger';

export const logger = definePackage('@alwatr/weaver-build', __package_version__, true);

export const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
