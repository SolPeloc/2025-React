import React, { useContext } from 'react'
import "../assets/styles/nav.css"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CartContex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faCircleUser} from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  const {carritoSuma} = useContext(CarritoContext)
  return (
    <nav>
        <ul>
        <img src="/images/logo.png" alt="Logo" className='logoAtia' style={{width:"60px"}} />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/Contacto" >Contacto</Link ></li>
            <li><Link to="/Carrito"><img src='/images/carrito.png' alt='carrito' style={{width:"30px"}}/><p className='carritoSuma'>{carritoSuma}</p></Link></li>
            <li><Link to= "/login"><FontAwesomeIcon icon={faRightToBracket}/></Link></li>
            <li><Link to= "/admin"><FontAwesomeIcon icon={faCircleUser}/></Link></li>
        </ul>
    </nav>
  )
}

export default Nav
// el link, serve para navegar entre las diferentes rutas de la aplicacion, sin recargar la pagina.