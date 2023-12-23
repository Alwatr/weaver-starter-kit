import {AlwatrStorage} from '@alwatr/storage-sdk';

import {config} from './config';

export const storageClient = new AlwatrStorage(config.storageClient);
