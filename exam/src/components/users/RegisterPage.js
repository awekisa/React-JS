import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import FormHelpers from '../common/FormHelpers'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

class RegisterPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
      },
      error: ''
    }

    this.handleUserRegistration = this.handleUserRegistration.bind(this)

    userStore.on(
        userStore.eventTypes.USER_REGISTERED,
        this.handleUserRegistration
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_REGISTERED, this.handleUserRegistration
    )
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()
    if (!this.validateUser()) {
      return
    }
    userActions.register(this.state.user)
  }

  handleUserRegistration (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push('/users/login')
    }
  }

  validateUser () {
    const user = this.state.user
    let formIsValid = true
    let error = ''
    if (!user.name) {
      error = 'Please provide a name'
      formIsValid = false
    }
    if (user.password !== user.confirmPassword) {
      error = 'Passwords do not match'
      formIsValid = false
    }
    if (!validateEmail(user.email)) {
      error = 'Please provide valid email'
      formIsValid = false
    }
    if (error) {
      this.setState({error})
    }
    return formIsValid

    function validateEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }

  render () {
    return (
      <div>
        <h1>Register</h1>
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
 }

export default RegisterPage
