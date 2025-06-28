
import './estilosGenerales.css'
import Home from './layout/Home'
import Contacto from './layout/Contacto'
import { useState,useEffect, useContext } from 'react'
import {  Routes, Route} from 'react-router-dom'
import Carrito from './components/Carrito'
import Acercade from './layout/Acercade'
import Notfound from './layout/Notfound'
import Galeriaproductos from './layout/Galeriaproductos'
import Admin from './layout/Admin'
import DetalleProductos from './components/DetalleProductos'
import Login from './layout/Login'
import RutaProtegida from './auth/RutaProtegida'
import { AuthContext } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
function App() {    

  const{autenticacion} = useContext(AuthContext)

  return (
    <> 
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Galeriaproductos />}/>
        <Route path='/productos/:id' element={<DetalleProductos />}/>
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/Carrito' element={<Carrito />}/>
        <Route path='/Acercade' element={<Acercade /> }/>
        <Route path= '/admin' element={<RutaProtegida> <Admin/></RutaProtegida>}/>
        <Route path='/login' element={ <Login />}/>
        <Route path='*' element={<Notfound/>} /> 
      </Routes>
      <ToastContainer position= "top-center" autoClose={2000} />
    </>
      )
  
}

export default App

