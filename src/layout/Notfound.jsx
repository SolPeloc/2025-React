import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
      <h1>No se encontro dirección</h1>
        <p>La dirección que buscas no existe o no está disponible.</p>  
        <img src="https://cdn-icons-png.flaticon.com/512/190/190406.png" alt="error 404" />
       <button className='btn'><Link  className="btn" to="/">Volver al inicio</Link></button> 
    </div>
  )
}

export default Notfound
