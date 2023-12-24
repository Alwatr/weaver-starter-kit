import {createLogger, definePackage} from '@alwatr/logger';
definePackage('pmpa-app/11ty', '0.x');

export const logger = createLogger('pmpa-app', true);

export const devMode = process.env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
