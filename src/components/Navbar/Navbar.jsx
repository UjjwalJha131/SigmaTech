import React from 'react'
import { HashLink } from 'react-router-hash-link'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <h1>SigmaTech</h1>
      <main className='links'>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <HashLink to={"/#contact"}>Contact</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>  
      </main>
    </nav>
  )
}

export default Navbar