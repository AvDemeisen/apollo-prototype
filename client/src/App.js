import React from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

client
  .query({
    query: gql`
      {
        albums {
          name
        }
      }
    `
  })
  .then(result => console.log(result));



const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Albums</h2>
    </div>
  </ApolloProvider>
);



export default App;
