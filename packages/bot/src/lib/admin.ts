import {bot} from './bot';
import {config} from './config';

export function notifyAdmin(message: string) {
  return bot.api.sendMessage(config.bot.adminChatId, message);
}
