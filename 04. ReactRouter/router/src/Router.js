import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import SomeParamPage from './components/SomeParamPage'
import PrivateRoute from './components/PriveteRoute'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/params/:id' component={SomeParamPage} />
    <Redirect from='/about-us' to='/about' />
    <PrivateRoute path='/private' component={AboutPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
