import React from 'react'
import Boton from './Boton'
import Tarjetas from './Tarjetas'
import { Link } from 'react-router-dom'

const Producto = ({producto, agregarACarrito,color,texto}) => {
  
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
