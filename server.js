const { ApolloServer, gql } = require('apollo-server');

require('dotenv').config();

const todos = [
  { task: 'Hi ', completed: false },
  { task: 'There', completed: true }
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

const resolvers = {
  Query: {
    getTodos: () => {
      return todos;
    }
  }
};

const server = new ApolloServer({
  typeDefs
});

server.listen(4444).then(({ url }) => {
  console.log(`Server started on ${url}`);
});
