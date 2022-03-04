import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReplyModule } from './reply/reply.module';
import { databaseProviders } from './database.providers';

@Module({
  imports: [ConfigModule.forRoot(), ReplyModule],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
})
export class AppModule { }
