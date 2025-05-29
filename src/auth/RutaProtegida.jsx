import React from 'react'
import { Navigate } from 'react-router-dom'
const RutaProtegida = ({autenticacion, children}) => {
    if(!autenticacion) {
        // Si no está autenticado, redirigir a la página de inicio
        return <Navigate to="/login" replace />
    }
  return  children
    
  
}

export default RutaProtegida
// Si autenticacion es true, renderizar los hijos (children), que serían las rutas protegidas.
// Si autenticacion es false, redirigir a la página de inicio
//usamos navigate de react-router-dom para redirigir