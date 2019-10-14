import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AlbumList from './components/album-list/albumList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Apollo</h1>
      <AlbumList />
    </div>
  </ApolloProvider>
);



export default App;
