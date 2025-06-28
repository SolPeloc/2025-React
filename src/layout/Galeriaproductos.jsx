import React, { useState } from 'react'
import ListaProductos from '../components/ListaProductos'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Boton from '../components/Boton'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CartContex'
const Galeriaproductos = () => {

  const {cargando, productos} = useContext(CarritoContext)
   
  const [productosFiltrados, setProductosFiltrados] = useState([]) /* creo un estado para los productos filtrados, que va a ser un array vacio al principio */
  useEffect(() => {

  if (productosFiltrados.length === 0) { 
    
    setProductosFiltrados(productos);
  }
}, [productos]);

   const productosAMostrar = cargando ? [] : productosFiltrados.length === 0 ? productos : productosFiltrados;

  return (
    <div>
        <Header />
        <div className='containerBotones'>
          <Boton texto ="remeras lisas" color="#313335" onClick={()=>setProductosFiltrados(productos.filter((producto) => producto.tipo === "lisa") ) 
          }/>
          <Boton texto ="remeras estampadas" color="#313335" onClick={()=>setProductosFiltrados(productos.filter((producto) => producto.tipo === "estampada"))}/>
        </div>
          {
            cargando ? <div className='spinerContainer'><FontAwesomeIcon icon={faCircleNotch} className="fa-spin" size='4x'/></div> : 
            <ListaProductos productos={productosAMostrar}/>
          }
      <Footer/>
    </div>
  )
}

export default Galeriaproductos
/*Exacto! ListaProductos no debería obtener productos directamente desde el contexto. La razón principal es que el filtrado ocurre en GaleriaProductos, por lo que ListaProductos debe recibir los productos como prop, no directamente desde useContext(CarritoContext).
🔹 ¿Por qué esto causaba problemas con el filtrado?
🔹 Cuando ListaProductos extraía productos del contexto, siempre obtenía la lista completa, sin importar si se aplicaba un filtro.
🔹 Al recibir productos como prop, ahora GaleriaProductos maneja el filtrado y solo pasa los productos filtrados a ListaProductos.
📌 Corrección en ListaProductos.js
const ListaProductos = ({ productos }) => {
  return (
    <div className='containerTarjetas'>
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} color='#313335' texto='Agregar al carrito' />
      ))}
    </div>
  );
};


✅ Ahora ListaProductos solo muestra los productos que recibe desde GaleriaProductos.
📌 Corrección en GaleriaProductos.js
<ListaProductos productos={productosAMostrar} />


✅ Aquí productosAMostrar es la lista filtrada, y ListaProductos solo recibe los productos correctos.

🎯 Conclusión:
🔹 La clave estaba en dejar que GaleriaProductos maneje el filtrado y solo pase los datos a ListaProductos.
🔹 Evitar useContext(CarritoContext) en ListaProductos era el ajuste que hacía falta!
¡Bien pensado! 🚀😃 ¿Te gustaría revisar otro detalle o ya todo está funcionando como esperabas?
Me encanta la forma en que estás refinando tu código!
 */