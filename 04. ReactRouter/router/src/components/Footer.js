import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
  <div>
    <h3>Footer</h3>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/params/122'>Params</Link>
  </div>
)

export default Footer
