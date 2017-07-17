import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className='header-menu'>
    <h3>Header</h3>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/books'>Books</Link></li>
      <li><Link to='/authors'>Authors</Link></li>
    </ul>
  </div>
)

export default Header
