import { Injectable, Inject } from '@nestjs/common';
import { AUTH_NAME } from 'config/config.microservice';
import { ClientProxy } from '@nestjs/microservices';
const AUTHENTICATION_HEADER = 'authorization'
@Injectable()
export class AuthService {
    @Inject(AUTH_NAME)
    private readonly authMService: ClientProxy;

    async isValid(code) {
        return this.authMService.send({ cmd: 'isValid' }, code )
    }
}
