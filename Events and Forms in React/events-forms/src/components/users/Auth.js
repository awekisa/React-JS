class Auth {
  static authenticateUser (token) {
    window.localStorage.setItem('token', token)
  }

  static isUserAuthenticated () {
    return window.localStorage.getItem('token') !== null
  }

  static deauthenticateUser () {
    window.localStorage.removeItem('token')
  }
}

export default Auth
