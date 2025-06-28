import React, { useEffect, useState } from 'react'

const FormularioEditar = ({productoAEditar,editarProducto, cerrarModal,setProductoAEditar}) => {
const [error,setError]= useState({})
const [producto, setProducto] = useState(productoAEditar)//
//useeffect se usa para actualizar el estado del producto cuando se recibe un nuevo producto a editar
// si el productoAEditar cambia, se actualiza el estado del producto
 

useEffect(() => {
    if(productoAEditar){
      setProducto(productoAEditar)
    }
  }, [productoAEditar])

  if (!productoAEditar) return null; // return visual, después de los hooks



const manejoCambioInput = (e) =>{ 
  
     const {name, value} = e.target // destructuramos el objeto e.target, para obtener el nombre y el valor del input que se esta modificando
      setProducto({ ...producto,[name] : value}) 
  
}
const manejoEnvioFormEdit = (e)=>{ 
        e.preventDefault() //evitamos que se recargue la pagina al eviar el formulario.
        editarProducto(producto)//llamo a la funcion que edita el producto
        setError({})
        cerrarModal
        setProductoAEditar(null)
}
  return (
    <div>
      <div className='containerFormulario' >
            <h1>Formulario de edición</h1>
            <form onSubmit={manejoEnvioFormEdit}>
                <div> 
                    <label htmlFor='id'>Id:</label> 
                    <input id='id' 
                    type="number" 
                    name='id'
                    value={producto.id || ""}
                    onChange={manejoCambioInput}readOnly /> 
                    {error.id &&<p  style={{ color: 'red' }}>{error.id}</p> } 
                </div> 
                <div> 
                    <label htmlFor='nombre'>Nombre:</label> 
                    <input id='nombre' type="text" name='nombre' value={producto.nombre || ""} onChange={manejoCambioInput}required /> 
                    {error.nombre &&<p  style={{ color: 'red' }}>{error.nombre}</p> } 
                </div> 
                <div> 
                    <label htmlFor='precio'>Precio:</label>
                    <input  id="precio" type="number" name='precio' value={producto.precio || ""} onChange={manejoCambioInput} min="0"required />
                    {error.precio && <p style={{color:"red"}}>{error.precio}</p>}
                </div> 
                <div> 
                    <label htmlFor='stock'>stock:</label>
                    <input  id="stock" type="number" name='stock' value={producto.stock || ""} onChange={manejoCambioInput} min="0"required />
                    {error.stock && <p style={{color:"red"}}>{error.stock}</p>}
                </div> 
                    <div> 
                        <label htmlFor='descripcion'>Descripcion:</label>
                        <textarea id="descripcion" type="text" name='descripcion' value={producto.descripcion || ""} onChange={manejoCambioInput} required />
                        {error.descripcion && <p style={{color:"red"}}>{error.descripcion}</p>}
                    </div>
                    <div> 
                        <label htmlFor='categoria'>Categoria:</label>
                        <input id="categoria" type="text" name='categoria' value={producto.categoria || ""} onChange={manejoCambioInput} required />
                        {error.categoria&& <p style={{color:"red"}}>{error.categoria}</p>}
                    </div>
                    <div> 
                        <label>Imagen URL:</label>
                        <input type="text" name='imagen' value={producto.imagen || ""} onChange={manejoCambioInput} required />
                        {error.imagen && <p style={{color:"red"}}>{error.imagen}</p>}
                    </div>
                    <div className='containerBtn'> 
                        <button type='submit' className='btn'> Guardar cambios</button>
                        <button type="button" onClick={cerrarModal} className="btn"> Cancelar</button>
                    </div>
              </form>
        </div>
    </div>
  )
}

export default FormularioEditar
