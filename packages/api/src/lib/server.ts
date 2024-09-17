import {AlwatrApiServer} from '@alwatr/nanotron';

import {config} from './config.js';

export const nanotronApiServer = new AlwatrApiServer(config.nanotronApiServer);
