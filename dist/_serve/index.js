
  const { Api, Get, Middleware } = require('@midwayjs/hooks');
  const cache = require('koa-static-cache');
  const path = require('path');
  
  const client = path.join(__dirname, '..', '_client');

  exports.default = Api(
    Get('/*'),
    Middleware(
      cache({
        dir: client,
        dynamic: true,
        alias: { '/': 'index.html' },
        buffer: true,
      })
    ),
    async () => {}
  );
  