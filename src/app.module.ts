/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { WebhookModule } from './webhook.module';
import { WebhookController } from './webhook.controller';
import { EventModule } from './event.module';
import { CacheService } from './cache.service';
import { EventService } from './event.service';
// import { CacheModule } from 'cache-manager';
//import { cacheConfig } from './cache.config';

@Module({
  imports: [DatabaseModule, WebhookModule, EventModule],
  controllers: [AppController, WebhookController],
  providers: [ AppService, CacheService, EventService],
})
export class AppModule {}
