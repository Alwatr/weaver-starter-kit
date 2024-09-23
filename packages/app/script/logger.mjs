import {definePackage} from '@alwatr/logger';

export const logger = definePackage('@alwatr/weaver-build', '5.x', true);

export const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
