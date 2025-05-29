import React, { useState } from 'react'
import ListaProductos from '../components/ListaProductos'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Boton from '../components/Boton'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
const Galeriaproductos = ({carritoSuma,agregarACarrito, productos, cargando}) => {

  const [productosFiltrados, setProductosFiltrados] = useState([]) /* creo un estado para los productos filtrados, que va a ser un array vacio al principio */
useEffect(() => {
  setProductosFiltrados(productos);
}, [productos]);
   const productosAMostrar = cargando ? [] : productosFiltrados.length > 0 ? productosFiltrados : productos;

  return (
    <div>
      <Header carritoSuma={carritoSuma}/>
      <div className='containerBotones'>
         <Boton texto ="remeras lisas" color="#313335" onClick={()=>setProductosFiltrados(productos.filter((producto) => producto.tipo === "lisa"))}/>
         <Boton texto ="remeras estampadas" color="#313335" onClick={()=>setProductosFiltrados(productos.filter((producto) => producto.tipo === "estampada"))}/>
      </div>
      {
        cargando ? <div className='spinerContainer'><FontAwesomeIcon icon={faCircleNotch} className="fa-spin" size='4x'/></div> : 
         <ListaProductos agregarACarrito={agregarACarrito} productos={productosAMostrar} cargando={cargando}/>
      }
      
      <Footer/>
    </div>
  )
}

export default Galeriaproductos
