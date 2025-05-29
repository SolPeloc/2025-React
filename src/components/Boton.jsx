import React from 'react'
import '../assets/styles/button.css' 

const Boton = ({texto, color, onClick}) => {

  return (
<button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{texto}</button>/* variables y logicas siempre en {} */
  )
}

export default Boton
