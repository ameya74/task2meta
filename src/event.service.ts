/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CacheService } from './cache.service';
import  Event  from './event.model';

@Injectable()
export class EventService {
  constructor(private readonly cacheService: CacheService) {}

  async getEventById(id: string): Promise<any> {
    const cacheKey = `event:${id}`;
    let event = await this.cacheService.get(cacheKey);
    if (!event) {
      event = await Event.findById(id);
      await this.cacheService.set(cacheKey, event, 60);
    }
    return event;
  }
}
