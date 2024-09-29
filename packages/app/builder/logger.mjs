import {createLogger} from '@alwatr/logger';

export const logger = createLogger('@alwatr/weaver-build');

export const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
