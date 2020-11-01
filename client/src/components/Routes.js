import React from 'react'
import { Game, About, NotFound } from './index.js'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Game} />
        <Route path='/404' component={NotFound} />
        <Redirect from='/*' to='/404' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
