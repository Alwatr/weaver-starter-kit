import {AlwatrStore} from '@alwatr/store';

import {config} from './config.js';

export const storeClient = new AlwatrStore(config.store);
