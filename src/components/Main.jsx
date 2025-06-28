import React from 'react'
import "../assets/styles/main.css"
import Header from './Header'
import Footer from './Footer'
import Galeriaproductos from '../layout/Galeriaproductos' 
const Main = ({carritoSuma,agregarAcarrito, producto}) => {
  return (
    <> 
      <Header carritoSuma={carritoSuma}/>
      <main className='mainPrincipal'>
          <h1>Bienvenidos a ATIA</h1>
          <p>En nuestra tienda online, ofrecemos una amplia variedad de productos de moda, desde remeras hasta accesorios. 
                Todos nuestros productos son de alta calidad y están a la moda. 
                Navega por nuestra galería y descubre lo que tenemos para ofrecerte.</p>
          </main>
          <div>
            <section>
              <h2>Galeria de productos</h2>
              <Galeriaproductos  agregarAcarrito={agregarAcarrito}  producto={producto}/>
            </section>
          </div>
      <Footer/>
    </> )
}

export default Main
