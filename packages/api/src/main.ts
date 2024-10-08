import {logger} from './lib/config.js';
import {initializeStore} from './lib/nitrobase.js';
import './route/home.js';
import './route/user.js';

logger.banner('alwatr-weaver-api');

initializeStore();
