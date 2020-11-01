import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Routes, NavComponent } from './components'

const client = new ApolloClient({
  uri: 'http://localhost:3001/triviadata',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <NavComponent />
    <Routes />
  </ApolloProvider>,

  document.getElementById('root')
)
