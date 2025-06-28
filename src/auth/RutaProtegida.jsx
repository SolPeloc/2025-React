import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const RutaProtegida = ({ children}) => {
  const usuarioGuardado = localStorage.getItem("auth");
  const {autenticacion,salida} = useContext(AuthContext)
      if(!autenticacion && !usuarioGuardado && !salida) {
          return <Navigate to="/login" replace />
      }
    return  children  
}

export default RutaProtegida
// Si autenticacion es true, renderizar los hijos (children), que serían las rutas protegidas.
// Si autenticacion es false, redirigir a la página de login
//usamos navigate de react-router-dom para redirigir