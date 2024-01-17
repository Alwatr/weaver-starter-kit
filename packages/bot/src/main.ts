/* eslint-disable import/order */

import './initial';
import {onStart} from './lib/admin.js';
import {bot} from './lib/bot.js';
import {logger} from './lib/config';

logger.banner('@moqis/dcd-bot');

bot.start({onStart, drop_pending_updates: false});
