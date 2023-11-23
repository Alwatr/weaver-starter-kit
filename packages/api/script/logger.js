import {createLogger} from '@alwatr/logger';
import {env} from 'process';

export const logger = createLogger('pmpa-api', true);

export const devMode = env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode)
