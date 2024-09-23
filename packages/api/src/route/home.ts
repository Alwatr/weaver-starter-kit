import {nanotronApiServer} from '../lib/server.js';

nanotronApiServer.defineRoute({
  method: 'GET',
  url: '/',
  handler () {
    this.serverResponse.replyJson({
      ok: true,
      data: {
        app: '..:: Alwatr Weaver API ::..',
        message: 'Hello ;)',
      },
    });
  },
});
