import { Resolver, Query, ResolveReference } from '@nestjs/graphql';

@Resolver('Project')
export class ProjectResolver {
    @Query()
    async project() {
        return {
            id: 1,
            name: 'name',
            description: 'desc',
            status: 'BIDDING'
        }
    }

    @ResolveReference()
    resolveReference(reference: {__typename: string, id: string}) {
        return {
            id: 1,
            name: 'name',
            description: 'desc',
            status: 'BIDDING'
        }
    }
}
