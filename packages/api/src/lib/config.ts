import {definePackage} from '@alwatr/logger';
import {Region, StoreFileType} from '@alwatr/store';

import type {} from '@alwatr/nano-build';

export const logger = definePackage('@alwatr/weaver-api', __package_version__);

if (process.env.NODE_ENV === 'production') {
  if (process.env.STORE_TOKEN == null) {
    throw new Error('STORE_TOKEN is required in production');
  }
}

export const config = {
  token: {
    secret: process.env.tokenGeneratorSecret ?? 'DEV_SECRET',
    duration: '1y',
  },

  storeFactory: {
    rootPath: './db',
    defaultChangeDebounce: 2_000, // for demo
  },

  stores: {
    usersCollection: {
      name: 'user-info',
      region: Region.PerUser,
      type: StoreFileType.Collection,
    },
  },

  nanotronApiServer: {
    host: process.env.host ?? '0.0.0.0',
    port: process.env.port != null ? +process.env.PORT : 8000,
    prefix: '/api/v0/',
    // allowAllOrigin: true,
  },
} as const;

logger.logProperty?.('config', config);
