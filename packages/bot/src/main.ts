/* eslint-disable import/order */

import './initial';
import './bot/start-command';
import './bot/admin/delete-content';
import './bot/admin/get-content';
import './bot/admin/notify';
import './bot/admin/set-content';
import './bot/help-command';
import './bot/subscribe-callback';
import './bot/unsubscribe-callback';
import {bot} from './lib/bot.js';
import {config, logger} from './lib/config';
import {message} from './lib/i18n.js';

logger.banner('dcd-bot');

bot.start({
  drop_pending_updates: false,
  onStart: async () => {
    await bot.api.sendMessage(config.bot.adminChatId, message('startup_message'));
  },
});
