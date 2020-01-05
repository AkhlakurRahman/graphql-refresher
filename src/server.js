import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    name: String!
  }
`;

const resolvers = {
  Query: {
    name: () => {
      return 'Hi there';
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log(`Server started on http://localhost:4444`);
});
