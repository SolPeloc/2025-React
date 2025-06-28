import React, { Children } from 'react'
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
const [autenticacion, setAutenticacion] = useState(false) 
const [email,setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState({})
const [salida, setSalida] = useState(false); 
const navigate = useNavigate()

//creamos una funcion, para manejar envio formulario, analizando lo que se va a enviar
//usamos async, para convertir la función a asíncrona, lo que significa que podrá manejar operaciones que tardan en completarse, como llamadas a APIs o consultas a bases de datos.
//uso de localstorage.
useEffect(() => {
  const usuarioGuardado = localStorage.getItem("auth")
  console.log("¿Hay usuario guardado?", usuarioGuardado);

  if(usuarioGuardado){
    const usuario = JSON.parse(usuarioGuardado)
    setAutenticacion(true)
    setEmail(usuario.email || "")
  }
  
}, []);
const manejoEnvioForm = async(e) =>{
  e.preventDefault() // Se cancela la acción de envío del formulario
  let validacionError = {} //objeto vacio que va a almacenar claves
  if(!email) validacionError.email = "email es requerido"  /*-  Si el email está vacío, se agrega la propiedad email con el mensaje  de error dentro del objeto validacionError.- Esto significa que el sistema guardará este mensaje de error para mostrarlo más tarde al usuario.*/
  if(!password) validacionError.password = "contraseña es requerido"          
  if(Object.keys(validacionError).length > 0 ) //- devuelve un array con los nombres de las propiedades de un objeto, en este caso guardaria email y password. y aca verificamos, con length, si es hay claves entonces...*/
      { setError(validacionError)// le estoy pasando el array con los errores.
                return
      }
        //En el contexto de fetch(), nos ayudan a capturar posibles errores, como problemas de conexión o respuestas inválidas.
        // try, Intenta ejecutar el código dentro del bloque. y catch, - Si ocurre un error en try, se captura aquí y podemos manejarlo sin que el programa se rompa.
        //await, pausa la ejecución de una función asíncrona hasta que una promesa se resuelva
          try{
            const respuesta = await fetch("/data/users.json") //traemos la data 
            const usuarios = await respuesta.json()//guardamos la daata en usuarios y lo convertimos en un objeto json
            const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.password === password)
            if (!usuarioEncontrado){
              setError({email: "credenciales incorrectas"}) //si no encuentra el usuario encontrado, setea el error
            }else{
              localStorage.setItem("auth", JSON.stringify(usuarioEncontrado)) //guardamos en localstorage del navegador el usuario.
              if(usuarioEncontrado.rol === "admin"){
                setAutenticacion(true) //si es admin, setea autenticacion en true
                navigate('/admin') //y lo redirige a la pagina de admin
              }else{
                navigate('/') //si es cliente, va a la pagina de inicio
              }
            }
          }
          catch(error){
          setError({email: "algo salio mal, intente mas tarde"}) //si hay un error, setea el error, como es un objeto, lo ponemos en llaves, y agregamos un mensaje, 
          }
}
    return(
        <AuthContext.Provider 
          value={
              {email,
              password, 
              error,
              setEmail, 
              setPassword, 
              manejoEnvioForm,
              setAutenticacion,
              autenticacion,
              setSalida,
              salida 
              }
            }>
          {children}
        </AuthContext.Provider>
    )
}