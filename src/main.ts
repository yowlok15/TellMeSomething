import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.setViewEngine('ejs')
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views/pages'));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
