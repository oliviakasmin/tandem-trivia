import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Game } from './components'

const client = new ApolloClient({
  uri: 'http://localhost:3001/triviadata',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <React.StrictMode> */}
    {/* </React.StrictMode>, */}
    <Game />
  </ApolloProvider>,

  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
