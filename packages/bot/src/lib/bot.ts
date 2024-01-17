import {Bot} from 'grammy';

import {config} from './config';

export const bot = new Bot(config.bot.token, {botInfo: config.bot.info});
