import { Module } from '@nestjs/common';
import { ProjectController } from './project/project.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [PrismaModule, ProjectModule],
  controllers: [ProjectController],
  providers: [],
})
export class AppModule {}
