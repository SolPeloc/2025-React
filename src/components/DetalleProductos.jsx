import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Tarjetas from './tarjetas'
import "../assets/styles/tarjetas.css"
import Boton from './Boton'
import Header from './Header'
const DetalleProductos = ({productos, agregarACarrito, carritoSuma}) => {

    const { id } = useParams() // Obtiene el id del producto desde la URL


    const productoSeleccionado = productos.find(p => p.id.toString() === id);

    
  return (
    
     <div>
      <Header carritoSuma={carritoSuma}/>
      {productoSeleccionado ? (
        <>
        <div className='TarjetaDetalle'>
          <Tarjetas
            id={productoSeleccionado.id}
            nombre={productoSeleccionado.nombre}
            img={productoSeleccionado.img} 
            precio={productoSeleccionado.precio}
            descripcion={productoSeleccionado.descripción}
          />
            <Boton onClick={() => agregarACarrito(productoSeleccionado)} color="#313335" texto= "agregar a carrito"/>
          <Link to="/productos">
            <button className='btn'>Volver a productos</button> 
            </Link>
        </div>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )
      }
    </div>
    
  );

  
}

export default DetalleProductos
