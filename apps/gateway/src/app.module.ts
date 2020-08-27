import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from './config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { resolve } from 'path';
@Module({
  imports: [
    ProjectModule,
    ConfigModule,
    GraphQLModule.forRoot({
      typePaths: ['apps/gateway/src/**/*.graphql']
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
