import React from 'react'
import { Link } from 'react-router-dom'

import "../assets/styles/footer.css" 

const Footer = () => {
  return (
    <> 
    <footer >
      <p>Todos los derechos reservados &copy; 2025</p>
      <p>Desarrollado por Sol Peloc</p>
      <ul className='containerLinks '> 
      <li><Link to="/Acercade">Sobre Nosotros</Link></li>
      <li><Link to="/Contacto">Contacto</Link></li> 
      </ul>
      <div className='containerRedes'> 
       <p>Redes Sociales: </p>
                        <div>
                            <a href="https://www.facebook.com/ATIAMULTIMARCA"> <img  src="/images/fc.png" className="iconoStyle traslate"alt="face" style={{ width: "30px" }}/></a>
                            <a href="https://www.instagram.com/atia_multimarca/"><img  src="/images/ig.png"className="iconoStyle traslate " alt="ig"style={{ width: "30px" }}/></a>
                        </div>
        </div>
    </footer>
 </> )
}

export default Footer
/*atajo creacion de componente rafce*/

