import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import * as task from '@midwayjs/task';
import { join } from 'path';

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [Koa, task, hooks()],
  importConfigs: [
    { default: { keys: 'session_keys' } },
    join(__dirname, 'config'),
  ],
});
