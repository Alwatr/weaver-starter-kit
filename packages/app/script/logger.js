import {createLogger} from '@alwatr/logger';
import {env} from 'process';

export const logger = createLogger('pmpa', true);

export const productionMode = env.NODE_ENV === 'production';
logger.logProperty?.('productionMode', productionMode);
