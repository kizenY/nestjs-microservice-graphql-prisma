import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TENDER_NAME, TENDER_TRANSPORT, TENDER_PORT } from 'config/config.microservice';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(TENDER_PORT);
}
bootstrap();
