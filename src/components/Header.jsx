import React from 'react'
import "../assets/styles/header.css"
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
