import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <img src={logo} alt='logo' className='logo' />
        <ul className='nav-links'>
          <li> <Link to='/' > Home </Link> </li>
          <li> <Link to='/about' > About </Link> </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
