import { Module } from '@nestjs/common';
import { BiddingResolver } from './bidding.resolver';
import { ClientsModule } from '@nestjs/microservices';
import { TENDER_NAME, TENDER_TRANSPORT, TENDER_PORT } from 'config/config.microservice';
import { ProjectResolver } from './project.resolver';

@Module({
  providers: [BiddingResolver, ProjectResolver]
})
export class BiddingModule {}
