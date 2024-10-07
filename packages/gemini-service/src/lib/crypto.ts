import {AlwatrCryptoFactory} from 'alwatr/nanotron';

import {config} from './config.js';

export const cryptoFactory = new AlwatrCryptoFactory(config.token);
