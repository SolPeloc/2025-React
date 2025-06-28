import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export const CarritoContext = createContext()

export const CarritoProvider = ({children}) =>{   ///proveedor, recibe children, que son los componentes que envolverá para compartirles el estado del carrito.

  const [productos, setProductos] = useState([]) 
  const [cargando, setCargando] = useState(true) 

  useEffect(() => {
    fetch("/data.json")
    .then( (response=> response.json()))
    .then((productos ) => {
      setTimeout(() => {
      setProductos(productos)
      setCargando(false) 
      },2000)
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
      : [...prevCarrito, { ...producto, cantidad: 1 }];
      //sino agrego el producto al carrito, y le asigno la cantidad 1.
      }) 
      toast.success(`${producto.nombre} fue agregado al carrito`);
      }

      const manejarSuma = (id) => {
          setCarrito((carrito => carrito.map(item => item.id === id ?{ ...item, cantidad: item.cantidad + 1} : item )))// 
      }

      const manejarResta = (id) => {
      setCarrito((carrito =>carrito.map(item => item.id ===id && item.cantidad > 1 ? {...item, cantidad: item.cantidad -1} : item)))
      }

      const eliminarProducto = (id) => {
        const producto = carrito.find(item => item.id === id)
      setCarrito(carrito.filter(item => item.id !==id))
      toast.info(`${producto.nombre} fue eliminado`);
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
              <CarritoContext.Provider 
                  value={
                    {
                      carrito,
                      carritoSuma, 
                      manejarAgregarCarrito, 
                      manejarSuma, 
                      manejarResta, 
                      eliminarProducto,
                      vaciarCarrito, 
                      productos,
                      cargando
                    }
                  }> {/*retorna el provider, el value contiene los datos y funciones que los componentes consumirán*/}
                  {children}     {/* Aquí se renderizan los componentes hijos */}
                </CarritoContext.Provider>
      )                              
}



// creo el contexto para carrito de compras, va a almacenar toda la logica
//del carrito.utilizo un export, es porque se va a exportar


//usecontext, es un hook que permite acceder a valores de un contexto sin necesidad de pasar props manualmente 
//provider,componente que permite compartir datos entre múltiples componentes sin necesidad de pasar props manualmente
//  a través de la jerarquía
///- Usar el Provider para envolver los componentes que necesitan acceder a los datos.

//del contexto, saco una variable y saco el valor de esa variable, sin utilizar props.

