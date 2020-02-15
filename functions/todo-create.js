import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import fetch from 'node-fetch'
import {config as dotenvConfig} from "dotenv";

// Load .env configuration
dotenvConfig();

const URL = 'https://graphql.fauna.com/graphql';

const client = new ApolloClient({
  uri: URL,
  fetch,
  request: operation => {
    operation.setContext({
      headers: {
        "Authorization": "Bearer " + process.env.FAUNADB_SERVER_SECRET
      },
    });
  },
});

exports.handler = (event, context, callback) => {
  const currentDate = new Date().toString();
  const allOpeningFens = gql`
      mutation CreateATodo {
          createTodo(data: {
              title: "Build an awesome app me ${currentDate}!"
              completed: false
          }) {
              title
              completed
          }
      }
  `;


  client.mutate({ mutation: allOpeningFens })
    .then(results => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(results),
      })
    })
    .catch(e => callback(e))
};
