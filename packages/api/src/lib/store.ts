import {AlwatrStore} from '@alwatr/store';

import {config} from './config.js';

export const alwatrStore = new AlwatrStore(config.storeFactory);
