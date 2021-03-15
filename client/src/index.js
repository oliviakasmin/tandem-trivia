import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Routes, NavComponent, Game, About, NotFound } from './components'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom'

// const client = new ApolloClient({
//   uri: 'http://localhost:3001/triviadata',
// })

ReactDOM.render(
  // <ApolloProvider client={client}>
  <Router>
    <NavComponent />
    <Routes />
  </Router>,

  // </ApolloProvider>,

  document.getElementById('root')
)
