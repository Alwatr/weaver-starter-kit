import {createLogger, packageTracer} from 'alwatr/nanolib';

export const logger = createLogger(__package_name__);

packageTracer.add(__package_name__, __package_version__);

if (process.env.NODE_ENV === 'production') {
  if (process.env.tokenGeneratorSecret == null) {
    throw new Error('tokenGeneratorSecret is required in production');
  }
  if (process.env.dbPath == null) {
    throw new Error('dbPath is required in production');
  }
}

export const config = {
  token: {
    secret: process.env.tokenGeneratorSecret ?? 'DEV_SECRET',
    duration: '1y',
  },

  nitrobase: {
    rootPath: process.env.dbPath ?? './db',
    defaultChangeDebounce: 2_000, // for demo
  },

  googleGenerativeAI: {
    // finalUrl: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models/',
    apiKey: process.env.AI_API_CODE,
    model: 'gemini-1.5-flash',
    prompt: 'Find data about {{entity}}',
  },

  templateFileInfo: {
    name: 'template.md',
    path: './dist/template.md',
    mimeType: 'text/markdown'
  },

  entities: ['binance'],
} as const;

logger.logProperty?.('config', config);
