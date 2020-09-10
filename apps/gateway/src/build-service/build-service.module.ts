import { Module } from '@nestjs/common';
import { GATEWAY_BUILD_SERVICE } from '@nestjs/graphql';
import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
@Module({
    imports: [AuthModule],
    providers: [
      {
        provide: GATEWAY_BUILD_SERVICE,
        useFactory: async (authService: AuthService) => {
          return (opt) => {
              console.log(opt);
            class Authentication extends RemoteGraphQLDataSource{
              async willSendRequest(req) {
                console.log('has request')
                await authService.isValid(req);
              }
            }
            return new Authentication(opt)
          }
        },
        inject: [AuthService]
      }
    ],
    exports: [GATEWAY_BUILD_SERVICE]
  })
  export class BuildServiceModule {}