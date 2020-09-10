import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    JwtModule.register({
      secret: 'abcdefg',
      signOptions: { expiresIn: '1h' }
    })
  ],
  controllers: [AuthController]
})
export class AuthModule {}
