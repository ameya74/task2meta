/* eslint-disable prettier/prettier */
// src/cache.service.ts
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis'; 

@Injectable()
export class CacheService {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: 'localhost',  // your Redis host
      port: 6379,  // your Redis port
    });
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: any, ttl: number): Promise<void> {
    await this.client.set(key, value, 'EX', ttl);
  }
}






