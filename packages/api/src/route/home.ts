import {nanoServer} from '../lib/server.js';

import type {StringifyableRecord} from '@alwatr/type';


nanoServer.route<StringifyableRecord>('GET', '/', () => ({
  ok: true,
  data: {
    app: '..:: Alwatr PMPA API ::..',
    message: 'Hello ;)',
  },
}));
