import React from 'react'

const LoginForm = (props) => (
  <form>
    <div>{props.error}</div>
    <label htmlFor='email'>E-mail</label>
    <input
      type='email'
      name='email'
      placeholder='E-mail'
      value={props.user.email}
      onChange={props.onChange} />
    <br />
    <label htmlFor='password'>Password</label>
    <input
      type='password'
      name='password'
      placeholder='Password'
      value={props.user.password}
      onChange={props.onChange} />
    <br />
    <input type='submit' onClick={props.onSave} />

  </form>
)

export default LoginForm
