import React from 'react'
import { Game, About, NotFound } from './index.js'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Game} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes
