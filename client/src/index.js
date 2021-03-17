import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Routes, NavComponent } from './components'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <NavComponent />
    <Routes />
  </Router>,

  document.getElementById('root')
)
