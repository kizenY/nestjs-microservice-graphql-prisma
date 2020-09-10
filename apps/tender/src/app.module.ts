import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';
import { GraphQLModule, GraphQLFederationModule } from '@nestjs/graphql';
import { BiddingModule } from './bidding/bidding.module';
import { buildFederatedSchema } from '@apollo/federation'
@Module({
  imports: [
    PrismaModule,
    ProjectModule,
    BiddingModule,
    GraphQLFederationModule.forRoot({
      typePaths: ['apps/tender/src/**/*.graphql'],
    }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
