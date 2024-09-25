import alpine from 'alpinejs';

import {logger} from './lib/config.js';
import './lib/keep-scroll.js';
import './lib/lock-scroll.js';
// import './lib/service-worker.js';

logger.logModule?.('main');

logger.banner('@alwatr/weaver');

alpine.start();
