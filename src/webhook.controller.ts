/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import Event from './event.model';

@Controller('webhook')
export class WebhookController {
  
    @Post()
    async handleWebhook(@Body() data: any): Promise<any> {
    const event = new Event({ payload: data });
      await event.save();
      console.log(data);
        return {
            message: 'Webhook data received and saved!',
            eventID: event.id,
        };
    }
    
    @Get(':id')
    async getEvent(@Param('id') id: string): Promise<any> {
        const event = await Event.findById(id);
        return event;
    }

}






