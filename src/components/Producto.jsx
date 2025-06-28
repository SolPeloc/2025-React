import React, { useContext } from 'react'
import Boton from './Boton'
import Tarjetas from './Tarjetas'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CartContex'
const Producto = ({color, texto, producto}) => {
  
const {manejarAgregarCarrito: agregarACarrito}= useContext(CarritoContext) /*Esto es una desestructuración con renombramiento en JavaScript. Lo que estás haciendo es extraer manejarAgregarCarrito del contexto, pero asignarle un nuevo nombre (agregarACarrito) dentro del archivo.
 */
//
  return (
    <div className='estiloTarjeta'>
        <Tarjetas
          id={producto.id}
          nombre={producto.nombre}
          img={producto.img} 
          precio={producto.precio} 
          descripcion={producto.descripción}
        />
          <Boton onClick={() => agregarACarrito(producto)} color={color} texto= {texto}/> 
      <Link to={`/productos/${producto.id}`} className='linkDetalle'>
        <button className='btn'>Ver más</button>
      </Link>
        </div>
  )
}

export default Producto
/* Estás intentando extraer { producto } de useContext(CarritoContext), pero el contexto no almacena un solo producto, sino un array de productos.
❌ producto debería venir como prop desde ListaProductos, porque ListaProductos mapea los productos de la tienda.
 */