import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CreateAuthorPage from './components/CreateAuthorPage'
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'
import RegisterPage from './components/users/RegisterPage'
import PrivateRoute from './components/common/PrivateRoute'
import AccountPage from './components/users/AccounPage'
import LogoutPage from './components/users/LogoutPage'
import LoginPage from './components/users/LoginPage'
import ErrorPage from './components/ErrorPage'

class App extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <Navbar />
        <Switch>
          <Route path='/register' component={RegisterPage} />
          <PrivateRoute path='/account' component={AccountPage} />
          <PrivateRoute path='/logout' component={LogoutPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/create' component={CreateAuthorPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    )
  }
}

export default App
