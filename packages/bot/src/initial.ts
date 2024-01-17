import {config} from './lib/config.js';
import {storeEngine} from './lib/store.js';

const initialMode = process.env.initialMode === '1';

if (initialMode === true) {
  initial();
}

function initial() {
  storeEngine.defineStoreFile(config.storeStat.users);
  storeEngine.defineStoreFile(config.storeStat.content);
}
