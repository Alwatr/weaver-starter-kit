import {AlwatrNitrobase} from 'alwatr/nitrobase';

import {config} from './config.js';

export const alwatrNitrobase = new AlwatrNitrobase(config.nitrobase);

export function initializeStore() {
  for (const store of Object.values(config.stores)) {
    if (alwatrNitrobase.hasStore(store)) continue;
    alwatrNitrobase.newCollection(store);
  }
}
