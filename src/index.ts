import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFiles } from '@graphql-tools/load-files';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
    typeDefs: await loadFiles('src/graphql/**/*.graphql'),
  resolvers: await loadFiles('src/resolvers/**/*.{js,ts}'),
  introspection: process.env.NODE_ENV === 'development',
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Graphql ready at: ${url}`);
