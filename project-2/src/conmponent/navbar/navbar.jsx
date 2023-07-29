import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='contactUs-navbar container'>
        <div className='contactUs-logo'>
            <img src='images/Frame 2 1.png' alt='logo' />
        </div>
        <div className='contactUs-body-description'>
            <ul>
                <li>Home</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
