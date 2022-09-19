import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from './controller/message/message.controller';
import { MessageSchema } from './schema/message.schema';
import { MessageService } from './service/message/message.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports:
   [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }), 
    MongooseModule.forRoot(
      process.env.MONGODB_DB_URI,
    ),
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),   // <-- path to the static files
    }),
    ConfigurationModule
  ],
    controllers: [AppController,MessageController],
    providers: [AppService,MessageService],
})
export class AppModule {}