import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AlbumList from './components/album-list/AlbumList';
import AlbumForm from './components/album-form/AlbumForm';
import './App.scss'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <h1>Apollo</h1>
      <AlbumForm />
      <AlbumList />
    </div>
  </ApolloProvider>
);



export default App;
