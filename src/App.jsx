
import './estilosGenerales.css'
import Home from './layout/Home'
import Contacto from './layout/Contacto'
import { useState,useEffect } from 'react'
import {  Routes, Route} from 'react-router-dom'
import Carrito from './components/Carrito'
import Acercade from './layout/Acercade'
import Notfound from './layout/Notfound'
import Galeriaproductos from './layout/Galeriaproductos'
import Admin from './layout/Admin'
import DetalleProductos from './components/DetalleProductos'
import Login from './layout/Login'
import RutaProtegida from './auth/RutaProtegida'
function App() {    

const [productos, setProductos] = useState([]) 
const [cargando, setCargando] = useState(true) 
const [autenticacion, setAutenticacion] = useState(false) 
useEffect(() => {
  fetch("/data.json")
  .then( (response=> response.json()))
  .then((productos ) => {
    setProductos(productos)
    setCargando(false) 
  })
  .catch((error) => {
    console.log("Error al obtener los productos:" + error)
    setCargando  (false) 
  })
}, [])







const [carrito, setCarrito] = useState([]) 
const manejarAgregarCarrito = (producto) => {
  setCarrito(prevCarrito=>{
 let existe = prevCarrito.find((item)=> item.id === producto.id) 
  return existe
  ?
   prevCarrito.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item) // si existe, le sumo 1 a la cantidad, sino devuelvo el item sin cambios.
   : [...prevCarrito, { ...producto, cantidad: 1 }]; //sino agrego el producto al carrito, y le asigno la cantidad 1.
  }) 
}

const manejarSuma = (id) => {
    setCarrito((carrito => carrito.map(item => item.id === id ?{ ...item, cantidad: item.cantidad + 1} : item )))// 
  }

const manejarResta = (id) => {
  setCarrito((carrito =>carrito.map(item => item.id ===id && item.cantidad > 1 ? {...item, cantidad: item.cantidad -1} : item)))
}

const eliminarProducto = (id) => {
  setCarrito(carrito.filter(item => item.id !==id))
}
const vaciarCarrito = () => {
  setCarrito([]) 
}

   const [carritoSuma, setCarritoSuma] = useState(0) 
    useEffect(() => {
    const carritoSuma = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
            setCarritoSuma(carritoSuma) 
          }, [carrito])
  return (
    <> 
      <Routes> 
        <Route path='/' element={<Home carrito={carrito} manejarSuma= {manejarSuma} manejarResta={manejarResta} eliminarProducto={eliminarProducto} manejarAgregarCarrito={manejarAgregarCarrito} vaciarCarrito={vaciarCarrito} carritoSuma={carritoSuma} productos={productos} cargando={cargando}/>} />
        <Route path='/productos' element={<Galeriaproductos agregarACarrito={manejarAgregarCarrito}  carritoSuma={carritoSuma} productos={productos} cargando={cargando}/>}/>
        <Route path='/productos/:id' element={<DetalleProductos agregarACarrito={manejarAgregarCarrito}  carritoSuma={carritoSuma} productos={productos} cargando={cargando}/>}/> 
        <Route path='/Contacto' element={<Contacto carritoSuma={carritoSuma}/>} /> 
        <Route path='/Carrito' element={<Carrito itemsCarrito={carrito} manejarSuma= {manejarSuma} manejarResta={manejarResta} eliminarProducto={eliminarProducto} manejarAgregarCarrito={manejarAgregarCarrito} vaciarCarrito={vaciarCarrito} carritoSuma={carritoSuma}/>} /> 
        <Route path='/Acercade' element={<Acercade carritoSuma={carritoSuma}/>} /> 
        <Route path= "/admin" element={<RutaProtegida autenticacion={autenticacion}> <Admin/></RutaProtegida>}/>
        <Route path='/login' element={ <Login />}/>
        <Route path='*' element={<Notfound/>} /> 
      </Routes>
    </>
      )
  
}

export default App

