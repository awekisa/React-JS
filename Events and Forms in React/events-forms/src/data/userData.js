let users = {}

let userData = {
  register: (email, password) => {
    return new Promise((resolve, reject) => {
      if (users[email]) {
        resolve({
          error: 'Email already exists!'
        })
        return
      }

      let token = `${email} ${password}`
      users[email] = {
        email: email,
        password: password,
        token: token
      }
      resolve({token})
    })
  },
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      if (!users[email] || users[email].password !== password) {
        resolve({
          error: 'Invalid credentials!'
        })

        return
      }

      let token = `${email} ${password}`

      resolve({
        token: token
      })
    })
  }
}

export default userData
