import { GraphQLDefinitionsFactory } from "@nestjs/graphql";

const definitionFactory = new GraphQLDefinitionsFactory();
definitionFactory.generate({
    typePaths: ['./apps/gateway/src/**/*.graphql'],
    path: './graphql.ts',
    watch: true
})