import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { GraphQLModule, GraphQLGatewayModule } from '@nestjs/graphql';
import { TENDER_PORT, TENDER_NAME, AUTH_NAME, AUTH_PORT } from 'config/config.microservice';
@Module({
  imports: [
    ConfigModule,
    GraphQLGatewayModule.forRoot({
      gateway: {
        serviceList: [
          {name: TENDER_NAME, url: `http://localhost:${TENDER_PORT}/graphql`},
          // {name: AUTH_NAME, url: `http://localhost:${AUTH_PORT}`}
        ]
      }
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
