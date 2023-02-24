import React from 'react'
import './navbar.scss'
import logo from "../../assets/logo.svg"
const navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default navbar
