import { createContext,useEffect, useState } from "react";
import { toast } from "react-toastify";
export const ProductoContext = createContext()

export const ProductoProvider = ({children}) => {

const [productos, setProductos] = useState([])
const [cargando,setCargando] = useState(true)
  //const [productoAEditar, setProductoAEditar] = useState(null) 
const apiUrl = "https://68227dd0b342dce8004e5e70.mockapi.io/productos-ecommerce/productos"
  //funcion que se encarga de agregar un nuevo producto al array de productos,
  //y usamos fakestorepi, para simular una api, donde hacemos un post a esta api,y le
  //enviamos el producto que queremos agregar, 
  //dato que nos devuelve la api, lo agregamos al array de productos,
  // importante, esta api no guarda los datos en persistencia, cuando se recarga la pagina, se borra el array de productos,
  //para que se muestre en la pantalla,
  // usamos el metodo fetch para hacer una peticion a la api,


  //trabajamos con asincronia asi que usamos async/await,

  useEffect(() => {
    setTimeout(() => {
                  traerProductos()//
                   setCargando(false);// lo agrego?
                }, 2000);
   
  
}, [apiUrl]);//


const traerProductos = async() =>{
  try{
      const respuesta = await fetch(apiUrl)
      if(!respuesta.ok) throw Error("Error al cargar los productos")// sin no esta ok, lanzamos error
      const data = await respuesta.json()
      setProductos(data)
    }catch (error){
      toast.error(`Error al cargar los productos: ${error.message}`)
    }
}
const onAgregar= async(producto) =>{
    try{
        const respuesta = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)//
        })
        if(!respuesta.ok){
          throw new Error("error al agregar el producto")
        }
        const data = await respuesta.json() // respuesta de lo que enviamos a la api.
        await traerProductos()
        toast.success(`${producto.nombre} fue agregado`);
      }catch(error){
      console.log (error.message)
      toast.error(`Hubo un error al agregar :${producto.nombre}`)
    }
    
}
const eliminarProducto = async(id,nombre) =>{
      const confirmar = window.confirm("¿Estás seguro de eliminar este producto?")//
      if(confirmar){
        try{
            const respuesta = await fetch(`${apiUrl}/${id}`,{
            method: "DELETE"
            })
            if(!respuesta.ok) throw  Error ("Error al eliminar el producto")
            toast.info(`${nombre} fue eliminado`)
            traerProductos()
          }catch (error){
            toast.error(`hubo un error al eliminar producto :${nombre}`)
          } 
      }
}
    const editarProducto = async(producto) =>{
        try{
            const respuesta = await fetch(`${apiUrl}/${producto.id}`, { // usamos el id del producto para editarlo
            method: "PUT",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(producto) //convertimos el objeto producto a un string json
          })
            if(!respuesta.ok)   throw new Error("error al modificar el producto")
            await  traerProductos()
            toast.success(`${producto.nombre} se ha modificado`)
        }catch(error){
          toast.error(`error al modificar: ${producto.nombre}`)
        }
  }
  return (
    <ProductoContext.Provider value={
              { productos,
                onAgregar,
                editarProducto,
                eliminarProducto,
                cargando,
              }
            }>
      {children}      
    </ProductoContext.Provider>
  )
}