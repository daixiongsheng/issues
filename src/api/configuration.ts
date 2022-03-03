import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import { join } from 'path';

export default createConfiguration({
  imports: [Koa, hooks()],
  importConfigs: [join(__dirname, 'config')],
});
