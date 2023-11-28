import {createLogger} from '@alwatr/logger';
import {env} from 'process';

export const logger = createLogger('pmpa-app', true);

export const devMode = env.NODE_ENV !== 'production';
logger.logProperty?.('devMode', devMode);
