import { MidwayConfig } from '@midwayjs/core';

const config: MidwayConfig = {
  task: {
    redis: {
      host: 'redis100',
      port: 6739,
    },
    prefix: 'midway-task',
    defaultJobOptions: {
      repeat: {
        tz: 'Asia/Shanghai',
      },
    },
  },
};

export default config;
