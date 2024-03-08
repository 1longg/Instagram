import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomizeResponseInterceptor } from './util/customResponse.interceptor';
import { config } from 'aws-sdk';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useGlobalInterceptors(new CustomizeResponseInterceptor());

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
}
bootstrap();
