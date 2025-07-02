import React from 'react'
import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const Manejarenvio= (e) => { // e.preventDefault() es para evitar que la pagina se recargue al enviar el formulario
        e.preventDefault() 
        alert(`Formulario enviado: ${nombre}`) 
         setNombre('') // setNombre es una funcion que cambia el valor de la variable nombre a vacio, para limpiar el input
    } // Manejarenvio es una funcion que se ejecuta al enviar el formulario
  return (
    <div className='containerFormulario'>
      <form onSubmit={Manejarenvio} className='formulario'> 
        <input type="text"
        placeholder="Escribe tu nombre"
        onChange={(e) => setNombre(e.target.value)} 
        /> 
        <button type='submit' className='btn'>enviar</button>
      </form>
    </div>
  )
}

export default Formulario

