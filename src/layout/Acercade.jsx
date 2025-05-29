import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Acercade = ({carritoSuma}) => {
  return (
    <>
      <Header carritoSuma={carritoSuma}/>
      <div className='containerAcercade'> 
        <h1>Sobre Nosotros</h1>
          <p>Somos una tienda de ropa online, especializada en remeras y accesorios de moda. 
              Nuestro objetivo es ofrecerte productos de alta calidad y a la moda, para que puedas lucir increíble en cualquier ocasión.</p>
      </div>
    <Footer/>
    </>
  )
}

export default Acercade
