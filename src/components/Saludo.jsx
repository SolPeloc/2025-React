import React from "react";


const  Parrafo = () => <p>Hola soy un parrafo</p> /*esto es un componente, que retorna un parrafo, de una linea, no hace falta return*/


 /* exporto el componente para poder usarlo en otro lado, en este caso en app.jsx */
 //otra forma para no desestructurar seria:
/*const  Saludo = (props) => { /* Saludo es el nombre del componente, y props son las propiedades que le paso al componente.
props es un objeto que contiene todas las propiedades que le pasamos al componente.
const { name } = props;  destructuracion de props, para obtener el nombre de las propiedades que le paso al componente.
// destructuracion: es una forma de extraer valores de un objeto o array y asignarlos a variables individuales.*/


 const  Saludo = ({name}) =>{
    /* Saludo es el nombre del componente, y name es la propiedad que le paso al componente.*/
  return  (
    <div> {/* div contenedor */}
        <h1>Hola, soy un componente de saludo y tengo una prop : {name}</h1> {/* llamo a la propiedad name, que le paso al componente */}
        <Parrafo/> {/* llamo al componente Parrafo */}
   
  </div>
  )
 }

export default Saludo;
// export default Saludo; /* exporto el componente para poder usarlo en otro lado, en este caso en app.jsx */
/*
en react los compontentes reciben props, que son propiedades, y son argumentos que se pasan a los componentes para personalizarlos.
Las props son como los parámetros de una función, y permiten que un componente reciba datos desde su padre o desde el lugar donde se está utilizando.

*/