import React from 'react'
import "../assets/styles/header.css"
import logo from "../assets/images/logo1.png"
import Nav from './Nav'
const Header = ({carritoSuma}) => {
  return (
    <header>
        <div>
           <Nav carritoSuma={carritoSuma}/>
        </div>
    </header>
  )
}

export default Header
