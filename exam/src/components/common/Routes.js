import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import CreateCarPage from '../cars/CreateCarPage'
import HomePage from '../cars/HomePage'
import CarDetailsPage from '../cars/CarDetailsPage'
import PageNotFound from '../../components/common/PageNotFound'
import DetailsPage from '../../components/cars/ProfilePage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route exact path='/users/login' component={LoginPage} />
    <Route exact path='/users/register' component={RegisterPage} />
    <PrivateRoute exact path='/users/logout' component={LogoutPage} />
    <PrivateRoute exact path='/cars/create' component={CreateCarPage} />
    <PrivateRoute exact path='/cars/details/:id' component={CarDetailsPage} />
    <PrivateRoute path='/cars/mine' exact component={DetailsPage} />
    <Route component={PageNotFound} />

  </Switch>
)

export default Routes
