import React from 'react'
import {Link }from "react-router-dom";
import logo from '../../images/Main_logo.png'
const Header = () => {
  return (
    <nav>
    <div>
    <img src={logo}  alt="logo image" />
    </div>

    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <button to="/login">
            Login
        </button>
    </div>

  </nav>
  )
}

export default Header