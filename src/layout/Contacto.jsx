import React, { useContext } from 'react'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../assets/styles/contacto.css"


const Contacto = () => {
  
  return (
      <div>
        <Header />
        <div className='containerContacto'> 
          <h1>Contacto</h1>
          <Formulario/>
        </div>
        <Footer/>
      </div>
  )
}

export default Contacto
