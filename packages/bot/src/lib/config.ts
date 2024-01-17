import {createLogger, definePackage} from '@alwatr/logger';
import {Region, StoreFileExtension, StoreFileType} from '@alwatr/store-engine';

import type {UserFromGetMe} from 'grammy/types';

definePackage('pmpa-api', '0.x');

export const logger = createLogger('@alwatr/pmpa-api');

if (process.env.BOT_TOKEN == null) {
  throw new Error('`BOT_TOKEN` is required');
}

export const config = {
  store: {
    rootPath: './data',
    defaultChangeDebounce: 50,
  },

  storeStat: {
    users: {
      extension: StoreFileExtension.Json,
      name: 'users',
      region: Region.SuperAdmin,
      type: StoreFileType.Collection,
    },
    content: {
      extension: StoreFileExtension.Json,
      name: 'content',
      region: Region.SuperAdmin,
      type: StoreFileType.Collection,
    },
  },

  bot: {
    adminChatId: 716375794,
    token: process.env.BOT_TOKEN as string,
    info: {
      username: process.env.BOT_USERNAME,
      can_join_groups: true,
      can_read_all_group_messages: false,
      first_name: process.env.BOT_FIRST_NAME,
      is_bot: true,
      supports_inline_queries: false,
      language_code: 'fa',
    } as UserFromGetMe,
  },
} as const;

logger.logProperty?.('config', config);
