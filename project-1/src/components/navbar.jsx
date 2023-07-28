import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
      <nav>
        <div className='nav-Logo'>
          <img className='logo-img' src='image/nike_logo.jpg' alt='logo' />    
        </div>
        <div className='nav-option'>
          <ul className='nav-option-list'>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
          </ul>
        </div>
        <div className='nav-login'>
          <button className='login-button'>Login</button>
        </div>
      </nav>
  )
}

export default Navbar;
