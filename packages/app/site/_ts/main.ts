import alpine from 'alpinejs';

import {logger} from './lib/config.js';
import './lib/global-util.js';
import './lib/keep-scroll.js';
// import './lib/service-worker.js';
import './lib/type.js';

logger.banner('@alwatr/weaver');

alpine.start();
