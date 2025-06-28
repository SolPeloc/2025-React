import React, { useContext, useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ListaProductos from '../components/ListaProductos'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { CarritoContext } from '../context/CartContex'
import { AuthContext } from '../context/AuthContext'


const Home = () => {
const{setSalida} = useContext(AuthContext)
const { cargando, productos} = useContext(CarritoContext)
useEffect(() => {
  setSalida(false);
}, []);


    return (
            <>
            <Header />
            <div className='containerHome'> 
            <h1>Bienvenidos a ATIA</h1>
            <p>En nuestra tienda online, ofrecemos una amplia variedad de productos de moda, desde remeras hasta accesorios. 
                Todos nuestros productos son de alta calidad y están a la moda. 
                Navega por nuestra galería y descubre lo que tenemos para ofrecerte.</p>
            </div>
           <main>
            { cargando ?<div className='spinerContainer'><FontAwesomeIcon icon={faCircleNotch} className="fa-spin" size='4x'/></div> : 
            <ListaProductos productos={productos} /> 
            }
           </main>
            <Footer />
            </>
    )
}

export default Home


