import {definePackage} from '@alwatr/logger';

export const logger = definePackage('@alwatr/pmpa-app-build', '1.x', true);

export const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
