import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '@common/css/general.scss'
import Home from '@pages/Home/Home'
import NotFound from '@pages/NotFound/NotFound'

const App = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={NotFound} />
  </Switch>
)

export default App
