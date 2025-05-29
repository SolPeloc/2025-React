import React from 'react'
import { useState,useEffect } from 'react'
import Producto from "./Producto" /* importo el componente Producto, que es el que va a mostrar cada producto */
import Header from './Header'
import Nav from './Nav'
const ListaProductos = ({agregarACarrito, productos}) => {

  return (
    <> 
    <h1>Nuestros productos</h1>
    <div className='containerTarjetas'> 
        { 
          productos.map((producto) => (
          <Producto key={producto.id}
            producto={producto} 
            agregarACarrito={agregarACarrito} /* le paso la funcion agregar al carrito, que va a agregar el producto al carrito */
            color="#313335" /* le paso el color del boton, que es el mismo para todos los productos */
            texto="Agregar al carrito" /* le paso el texto del boton, que es el mismo para todos los productos */
            />      
          ))
        }
        </div>
   </>)
}

export default ListaProductos




