import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Root } from './components/pages/Root'
import * as serviceWorker from './serviceWorker'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: process.env.REACT_APP_ENDPOINT_URL + '/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
