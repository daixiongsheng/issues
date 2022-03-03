import { Api, Get } from '@midwayjs/hooks';

export const getDate = Api(Get('/api/getDate'), async () => {
  return new Date().toString();
});

export const home = Api(Get('/home'), async () => {
  return 'hello world';
});
