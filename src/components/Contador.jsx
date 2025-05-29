import React from 'react'
import { useState } from 'react'

const Contador = () => {
 const [contador, setContador] = useState(0) // inicializo el contador en 0, y le paso la funcion setContador para modificarlo.
    //[variable, funcion]

 // aca estaria desestructurando el useState, para que me devuelva el valor del contador, que es la variable y la funcion para modificarlo.
// console.log(useState(0)) // muestro el valor del contador en la consola

// setContador(contador +1) // cada vez que se renderiza el componente, se suma 1 al contador.
return (
    <div>
   <button onClick={()=> setContador(contador+1)} style={{color:"white"}}>+</button> {/* aca, cada vez que haga click en boton, la funcion setcontador, va ejecutar la funcio
   anonima que le puse, que a la variable contador le sume 1 */}
      <h1>valor del contador:{contador}</h1>
      <button onClick={()=> setContador(contador-1)} style={{color:"white"}}>-</button>
    </div>
  )
}

export default Contador
/*
usamos los estados para guardar datos que cambian en el tiempo, como el contador.
// el estado es una variable que se puede modificar, y que se renderiza cada vez que cambia.
como cualquier variable, podemos guardar arrays, objetos, strings, numeros, booleanos, etc.
*/
/*
formas de lllamar y declarar funcion, ej con el onclick:
  <button onClick={()=> setContador(contador-1)} style={{color:"white"}}>-</button>
  aca le estoy pasando una funcion anonima, que se ejecuta cuando el boton es clickeado.
  OTRA FORMA SERIA HACER LA FUNCION APARTE:
  const restar = () => {
    setContador(contador - 1); // Actualiza el estado contador, osea le resta 1 al valor actual de contador
  }
    y despues llamarla en el onclick:
  <button onClick={restar} style={{color:"white"}}>-</button>
*/