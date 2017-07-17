import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <h3>Header</h3>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/params'>Params</Link>
  </div>
)

export default Header
