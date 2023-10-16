/* eslint-disable prettier/prettier */
// src/cache.config.ts
import * as redisStore from 'cache-manager-redis-store';

export const cacheConfig = {
  store: redisStore,
  host: 'localhost',  // replace with your Redis host
  port: 6379,  // replace with your Redis port
  ttl: 600,  // Time to live in seconds
};
