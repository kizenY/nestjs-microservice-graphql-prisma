import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TENDER_NAME, TENDER_TRANSPORT, TENDER_PORT } from 'config/config.microservice';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: TENDER_TRANSPORT,
    options: {
      port: TENDER_PORT
    }
  });
  await app.listen(() => { console.log('tender started') });
}
bootstrap();
