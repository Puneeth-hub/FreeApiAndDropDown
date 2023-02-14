import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  ApolloProvider,
  ApolloClient,
  gql,
  InMemoryCache
} from '@apollo/client';
import './index.css'

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)
