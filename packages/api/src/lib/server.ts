import {AlwatrApiServer} from '@alwatr/nanotron';

import {config} from './config.js';

export const nanoServer = new AlwatrApiServer(config.nanoServer);
