import {createLogger} from '@alwatr/logger';
import {env} from 'process';

export const logger = createLogger('pmpa', true);

export const debugMode = env.NODE_ENV !== 'production';
