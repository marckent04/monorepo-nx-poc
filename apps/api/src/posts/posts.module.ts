import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import {  PostsController } from './posts.controller';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          baseURL: `${config.get('API_BASE_URL')}/posts`
        }
      }
    })
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
