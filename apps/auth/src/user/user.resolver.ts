import { Resolver, Query } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
    @Query()
    async user() {
        return { id: 1, username: 'robot', password: 'imarobot'}
    }
}
