import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React from 'react'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
})

const AppProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default AppProvider
