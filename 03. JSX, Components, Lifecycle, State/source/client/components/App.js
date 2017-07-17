import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loggedInUser: ''
    }

    this.LOGIN_DEFAULT_USER = this.LOGIN_DEFAULT_USER.bind(this)
  }

  componentDidMount () {
    this.LOGIN_DEFAULT_USER()
  }

  LOGIN_DEFAULT_USER () {
    let request = {
      method: 'post',
      url: 'user/login',
      data: JSON.stringify({username: 'admin', password: 'admin'}),
      contentType: 'application/json'
    }
    $.ajax(request)
      .done(userId => {
        this.setState({
          loggedInUserId: userId
        })
      })
      .fail(err => { // Redirect to User Login form on part 3
        console.log('UserMenu: err', err)
        this.setState({
          loggedInUserId: '',
          message: err.responseJSON.message
        })
      })
  }

  logoutUser () {
    let request = {
      url: '/user/logout',
      method: 'post'
    }
    $.ajax(request)
      .done(() => {
        this.setState({
          loggedInUser: ''
        })
      })
      .fail(err => {
        this.setState({
          error: err.responseJSON.message
        })
      })
  }

  render () {
    let userData = {
      loggedInUserId: this.state.loggedInUserId,
      loginUser: this.LOGIN_DEFAULT_USER,
      logoutUser: this.logoutUser.bind(this)
    }

    return (
      <div>
        <Navbar jistory={this.props.history} userData={userData} />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
