import { Resolver, ResolveField, Parent } from "@nestjs/graphql";

@Resolver('Project')
export class ProjectResolver{

    @ResolveField('bidding')
    getBidding(@Parent() project) {
        return {
            id: 1,
            biddingDeadline: new Date(),
        }
    }
}