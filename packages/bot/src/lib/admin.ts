import {bot} from './bot';
import {config} from './config';
import {message} from './i18n.js';

export function notifyAdmin(message: string) {
  return bot.api.sendMessage(config.bot.adminChatId, message);
}

export async function onStart() {
  await notifyAdmin(message('startup_message'));
}
