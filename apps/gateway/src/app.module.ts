import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { TENDER_PORT, TENDER_NAME, AUTH_NAME, AUTH_PORT } from 'config/config.microservice';
import { AuthModule } from './auth/auth.module';
import { BuildServiceModule } from './build-service/build-service.module';

@Module({
  imports: [
    GraphQLGatewayModule.forRootAsync({
      useFactory: () => ({
        gateway: {
          serviceList: [
            {name: TENDER_NAME, url: `http://localhost:${TENDER_PORT}/graphql`},
            {name: AUTH_NAME, url: `http://localhost:${AUTH_PORT}/graphql`}
          ],
        },
      }),
      imports: [ 
        BuildServiceModule,
      ],
    }),
    BuildServiceModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
