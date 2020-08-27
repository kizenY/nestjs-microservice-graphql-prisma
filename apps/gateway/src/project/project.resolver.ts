import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProjectInput } from 'graphql';
import { TENDER_NAME } from 'config/config.microservice';

@Resolver()
export class ProjectResolver {
    @Inject(TENDER_NAME)
    private readonly tenderService: ClientProxy;

    @Query()
    async projectOfManager(@Args('id')id: number){
        return this.tenderService.send('project', { id });
    }

    @Query()
    projectOfEvaluator(id: number) {
        return this.tenderService.send('project', { id });
    }

    @Query()
    projectOfSupplier(id: number) {
        return this.tenderService.send('project', { id });
    }

    @Query()
    async projectsOfManager(@Args('page') page: number, @Args('size') size: number, cursor){
        return this.tenderService.send('projects', { page, size, cursor });
    }

    @Query()
    projectsOfEvaluator(@Args('page') page: number, @Args('size') size: number, cursor) {
        return this.tenderService.send('projects', { page, size, cursor });
    }

    @Query()
    projectsOfSupplier(@Args('page') page: number, @Args('size') size: number, cursor) {
        return this.tenderService.send('projects', { page, size, cursor });
    }

    @Mutation()
    async createProject(@Args('data') data: CreateProjectInput) {
        return this.tenderService.send('createProject', { data });
    }
}
