const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const application = express();

application.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: buildSchema(`
      type Query {
        message: String
      }
    `),
    rootValue: {
      message: () => 'Hello World!'
    }
  })
)

module.exports = application;

