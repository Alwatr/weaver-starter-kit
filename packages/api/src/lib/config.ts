import {createLogger, packageTracer} from 'alwatr/nanolib';
import {Region, StoreFileType} from 'alwatr/nitrobase';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

export const logger = /* #__PURE__ */ createLogger(__package_name__);

if (process.env.NODE_ENV === 'production') {
  if (process.env.tokenGeneratorSecret == null) {
    throw new Error('tokenGeneratorSecret is required in production');
  }

  if (process.env.dbPath == null) {
    throw new Error('dbPath is required in production');
  }

  if (process.env.uploadPath == null) {
    throw new Error('uploadPath is required in production');
  }
}

export const config = {
  token: {
    secret: process.env.tokenGeneratorSecret ?? 'DEV_SECRET',
    duration: '1y',
  },

  upload: {
    basePath: process.env.uploadPath ?? './upload',
  },

  nitrobase: {
    rootPath: process.env.dbPath ?? './db',
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
    prefix: '/api/',
    // allowAllOrigin: true,
  },
} as const;

__dev_mode__: logger.logProperty?.('config', config);
