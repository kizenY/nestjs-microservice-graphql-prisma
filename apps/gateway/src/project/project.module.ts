import { Module } from '@nestjs/common';
import { ProjectResolver } from './project.resolver';
import { ClientsModule } from '@nestjs/microservices'
import { TENDER_NAME, TENDER_TRANSPORT, TENDER_PORT } from 'config/config.microservice';
@Module({
  imports: [
    ClientsModule.register([
      { name: TENDER_NAME, transport: TENDER_TRANSPORT, options: {port: TENDER_PORT}}
    ])
  ],
  providers: [ProjectResolver]
})
export class ProjectModule {}
