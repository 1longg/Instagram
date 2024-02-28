import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomizeResponseInterceptor } from './util/customResponse.interceptor';
import { config } from 'aws-sdk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useGlobalInterceptors(new CustomizeResponseInterceptor());
}
bootstrap();
