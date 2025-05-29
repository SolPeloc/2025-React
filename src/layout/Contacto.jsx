import React from 'react'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../assets/styles/Contacto.css"
const Contacto = ({carritoSuma}) => {
  return (
      <div>
        <Header carritoSuma={carritoSuma}/>
        <div className='containerContacto'> 
          <h1>Contacto</h1>
          <Formulario/>
        </div>
        <Footer/>
      </div>
  )
}

export default Contacto
