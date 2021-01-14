async function test() { 
    const Redis = require('ioredis');

    const redis = new Redis({
        port: 6379,
    });

    const keys = await redis.keys('*');
    await redis.setex('c', 10, 123);
    console.log(keys);
}

test();
