import {createLogger} from 'alwatr/nanolib';

export const logger = createLogger('weaver-build');

export const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
