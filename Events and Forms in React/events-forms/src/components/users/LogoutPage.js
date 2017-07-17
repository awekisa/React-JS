import {Component} from 'react'
import Auth from './Auth'

class LogoutPage extends Component {
  componentWillMount () {
    Auth.deauthenticateUser()
    this.props.history.push('/login')
  }

  render () {
    return null
  }
}

export default LogoutPage
