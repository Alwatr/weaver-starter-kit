import {definePackage} from '@alwatr/logger';

export const logger = definePackage('@alwatr/soffit-order-admin-build', '4.x', true);

export const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
