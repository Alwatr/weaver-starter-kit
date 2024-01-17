import {AlwatrStore} from '@alwatr/store-engine';

import {config} from './config';

export const storeEngine = new AlwatrStore(config.storeEngine);
