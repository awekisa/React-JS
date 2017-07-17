import React from 'react'
import Input from '../common/Input'

const RegisterForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      type='email'
      name='email'
      placeholder='Email'
      value={props.user.email}
      onChange={props.onChange} />
    <br />
    <Input
      type='password'
      name='password'
      placeholder='Password'
      value={props.user.password}
      onChange={props.onChange} />
    <br />
    <Input
      type='password'
      name='confirmPassword'
      placeholder='Confirm Password'
      value={props.user.confirmPassword}
      onChange={props.onChange} />
    <br />
    <Input
      type='text'
      name='name'
      placeholder='Name'
      value={props.user.name}
      onChange={props.onChange} />
    <br />
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default RegisterForm
