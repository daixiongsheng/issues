import { Api, Get, useContext, useInject } from '@midwayjs/hooks';
import { Provide, Queue, Task } from '@midwayjs/decorator';
import { QueueService } from '@midwayjs/task';

@Provide()
export class UserService {
  // 例如下面是每分钟执行一次，并且是分布式任务
  @Task({
    repeat: { cron: '* * * * *' },
  })
  async test() {
    console.log('UserService.test');
  }
}

@Queue()
@Provide()
export class HelloTask {
  async execute(params) {
    console.log(params);
  }
}

export const getDate = Api(Get(), async () => {
  const ctx = useContext();
  const queueService = await useInject(QueueService);
  const userService = await useInject(UserService);
  const job = queueService.getQueueTask(`HelloTask`, 'task');
  console.log(queueService, userService, job);
  console.log(typeof queueService, typeof userService, typeof job);
  return new Date().toString();
});
