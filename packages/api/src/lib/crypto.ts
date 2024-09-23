import {AlwatrCryptoFactory} from '@alwatr/crypto';

import {config} from './config.js';

export const cryptoFactory = new AlwatrCryptoFactory(config.token);
