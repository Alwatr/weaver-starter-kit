import {createLogger, packageTracer} from 'alwatr/nanolib';
import {Region, StoreFileType} from 'alwatr/nitrobase';

export const logger = createLogger(__package_name__);

packageTracer.add(__package_name__, __package_version__);

if (process.env.NODE_ENV === 'production') {
  if (process.env.tokenGeneratorSecret == null) {
    throw new Error('tokenGeneratorSecret is required in production');
  }
}

export const config = {
  token: {
    secret: process.env.tokenGeneratorSecret ?? 'DEV_SECRET',
    duration: '1y',
  },

  nitrobase: {
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
    port: process.env.port !== undefined ? +process.env.port : 8000,
    prefix: '/api/v0/',
    // allowAllOrigin: true,
  },
} as const;

logger.logProperty?.('config', config);
