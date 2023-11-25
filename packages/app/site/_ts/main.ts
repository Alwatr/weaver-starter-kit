import alpine from 'alpinejs';

import './lib/config.js';
import './lib/global-util.js';
import './lib/keep-scroll.js';
import {logger} from './lib/logger.js';
import './lib/type.js';

logger.banner('@alwatr/pmpa');

alpine.default.start();
