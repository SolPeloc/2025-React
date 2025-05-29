import React, { useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ListaProductos from '../components/ListaProductos'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Home = ({carrito, manejarAgregarCarrito, manejarSuma, manejarResta, eliminarProducto, vaciarCarrito, carritoSuma, productos, cargando}) => {


    return (
            <>
            <Header carritoSuma={carritoSuma} />
            <div className='containerHome'> 
            <h1>Bienvenidos a ATIA</h1>
            <p>En nuestra tienda online, ofrecemos una amplia variedad de productos de moda, desde remeras hasta accesorios. 
                Todos nuestros productos son de alta calidad y están a la moda. 
                Navega por nuestra galería y descubre lo que tenemos para ofrecerte.</p>
            </div>
           <main>
            { cargando ?<div className='spinerContainer'><FontAwesomeIcon icon={faCircleNotch} className="fa-spin" size='4x'/></div> : 
            <ListaProductos productos={productos} agregarACarrito={manejarAgregarCarrito}/> 
            }
           </main>
            <Footer />
            </>
    )
}

export default Home


