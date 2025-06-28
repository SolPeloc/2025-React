import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import Producto from "./Producto" /* importo el componente Producto, que es el que va a mostrar cada producto */


const ListaProductos = ({productos}) => {

  return (
    <> 
    <h1>Nuestros productos</h1>
    <div className='containerTarjetas'> 
        { 
          productos.map((producto) => (
          <Producto key={producto.id}
            producto={producto} 
            color="#313335" /* le paso el color del boton, que es el mismo para todos los productos */
            texto="Agregar al carrito" /* le paso el texto del boton, que es el mismo para todos los productos */
            />      
          ))
        }
        </div>
   </>)
}

export default ListaProductos




