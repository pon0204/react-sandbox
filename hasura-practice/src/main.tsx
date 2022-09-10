import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import './index.css'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://select-rodent-49.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret': import.meta.env.VITE_REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
    },
  }),
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
