import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GraphQLFederationModule.forRoot({
      typePaths: ['apps/auth/src/**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
