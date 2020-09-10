import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AUTH_TRANSPORT, AUTH_PORT } from 'config/config.microservice';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: AUTH_TRANSPORT
  })
  await app.startAllMicroservicesAsync();
  await app.listen(AUTH_PORT);
  console.log(`auth is running on: ${await app.getUrl()}`);
}
bootstrap();
