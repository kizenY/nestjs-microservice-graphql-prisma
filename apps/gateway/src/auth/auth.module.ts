import { Module, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AUTH_NAME, AUTH_TRANSPORT, AUTH_PORT } from 'config/config.microservice';
import { ClientProxy, ClientsModule } from '@nestjs/microservices';
const AUTHENTICATION_HEADER = 'authorization';
@Module({
  imports: [
    ClientsModule.register([
        { name: AUTH_NAME, transport: AUTH_TRANSPORT, options: { port: AUTH_PORT }}
    ])
  ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
