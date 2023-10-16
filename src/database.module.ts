/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule , MongooseModuleOptions } from '@nestjs/mongoose';

declare module 'mongoose' {
  interface MongooseModuleOptions{
    useNewUrlParser?: boolean;
  }
}
@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://ameyahatangadi4:P6rfDEepIrr9UmgC@cluster0.g1d56ds.mongodb.net/mydatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongooseModuleOptions),
    ],
})
export class DatabaseModule {}
