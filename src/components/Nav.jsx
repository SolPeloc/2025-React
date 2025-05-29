import React from 'react'
import "../assets/styles/nav.css"
import logo from "../assets/images/logo1.png"
import { Link } from 'react-router-dom'
const Nav = ({carritoSuma}) => {
  return (
    <nav>
        <ul>
        <img src={logo} alt="Logo" className='logoAtia' style={{width:"60px"}} />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/Contacto" >Contacto</Link ></li>
            <li><Link to="/Carrito"><img src='/src/assets/images/carrito.png' alt='carrito' style={{width:"30px"}}/><p className='carritoSuma'>{carritoSuma}</p></Link></li>
        </ul>
    </nav>
  )
}

export default Nav
// el link, serve para navegar entre las diferentes rutas de la aplicacion, sin recargar la pagina.