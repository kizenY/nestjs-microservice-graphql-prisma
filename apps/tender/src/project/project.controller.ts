import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

@Controller('project')
export class ProjectController {
    @Inject()
    private readonly prisma: PrismaService;

    @MessagePattern('project')
    async project({ id }) {
        return this.prisma.project.findOne({ where:{ id: Number(id) }});
    }

    @MessagePattern('projects')
    async projects({ page, size, cursor }) {
        return this.prisma.project.findMany({ take: size, skip: (page-1)* size, cursor: cursor !== undefined ?{ id: cursor }: undefined})
    }

    @MessagePattern('createProject')
    async createProject({ data }){
        return this.prisma.project.create({data})
    }
}
