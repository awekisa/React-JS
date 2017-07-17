import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import CreateHotelPage from '../hotels/CreateHotelPage'
import ListHotelsPage from '../hotels/ListHotelsPage'
import HotelDetailsPage from '../hotels/HotelDetailsPage'
import PageNotFound from '../../components/common/PageNotFound'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListHotelsPage} />
    <Route path='/users/login' component={LoginPage} />
    <Route path='/users/register' component={RegisterPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/hotels/details/:id' component={HotelDetailsPage} />
    <PrivateRoute path='/hotels/create' component={CreateHotelPage} />
    <Route component={PageNotFound} />

  </Switch>
)

export default Routes
