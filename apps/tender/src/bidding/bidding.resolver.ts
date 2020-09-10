import { Resolver, ResolveField, Parent, Query } from '@nestjs/graphql';
import { Project } from 'graphql';

@Resolver('Bidding')
export class BiddingResolver {

    @Query()
    async bidding() {
        return {
            id: 1,
            biddingDeadline: new Date(),
        }
    }

    @ResolveField('project')
    getProject(@Parent() bidding) {
        return { __typename: 'Project', id: bidding.projectId}
    }
}
