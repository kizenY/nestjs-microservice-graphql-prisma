import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
@Controller()
export class AuthController {
    @Inject()
    private readonly jwtService: JwtService;

    @MessagePattern({ cmd: 'login' })
    async login(username: string, password: string) {
        const code = await this.jwtService.signAsync({id:1})
        return { id: 1, code }
    }

    @MessagePattern({ cmd: 'isValid' })
    async isValid(code: string) {
        const user =<{ id: string}> this.jwtService.decode(code);
        if(user && user.id !== null) return true;
        return false;
    }
}
