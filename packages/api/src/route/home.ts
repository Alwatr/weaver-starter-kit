import {nanoServer} from '../lib/server';

import type {StringifyableRecord} from '@alwatr/type';

nanoServer.route<StringifyableRecord>('GET', '/', () => ({
  ok: true,
  data: {
    app: '..:: Alwatr PMPA API ::..',
    message: 'Hello ;)',
  },
}));
