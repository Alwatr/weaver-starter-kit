import {NanotronApiServer} from 'alwatr/nanotron';

import {config} from './config.js';

export const nanotronApiServer = /* #__PURE__ */ new NanotronApiServer(config.nanotronApiServer);
