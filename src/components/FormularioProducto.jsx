import React,{ useState}from 'react'
import "../assets/styles/formulario.css" 
//creo formulario de producto, 
// que va a recibir los datos del producto, y los va a enviar al componente Admin,
//  para que se agregue al array de productos
 

const FormularioProducto = ({onAgregar,cerrarFormulario}) => { 
   
const [error, setError] = useState({}) // objeto que va a almacenar los errores del formulario
const [producto, setProducto]= useState({ 
        nombre: "",
        precio:"", 
        stock:"",
        descripcion:"", 
        categoria:"",
        imagen:"",}) // objeto que va a almacenar los datos del producto


const manejoCambioInput = (e) =>{ 
        const {name, value} = e.target // destructuramos el objeto e.target, para obtener el nombre y el valor del input que se esta modificando
        setProducto((prev) =>({ ...prev,
        [name] : value, // usamos la sintaxis de corchetes para actualizar el valor del campo correspondiente en el objeto producto 
    }))
}
 
const validarFormulario = () =>{
     const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.categoria.trim() || producto.categoria.length < 4) {
           nuevosErrores.categoria = 'La categoria debe tener al menos 4 caracteres.';
        }
        setError(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
}
// funcion que maneja el envio del formulario
 const manejoEnvioForm = (e)=>{ 
        e.preventDefault() //evitamos que se recargue la pagina al eviar el formulario.
         if (!validarFormulario()) {
            return;
        }
        onAgregar(producto)//llamo a la funcion que agrega el producto setProducto
        setProducto({   nombre:"", precio:"",stock:"", descripcion:"", categoria:"", imagen:""}) // reinicio el objeto producto a su estado inicial.
        setError({});//
        cerrarFormulario(null)
}

return (
        <div className='containerFormulario'>
            <h1>Formulario de productos</h1>
            <form onSubmit={manejoEnvioForm}>
                <div> 
                    <label htmlFor='nombre'>Nombre:</label> 
                    <input id='nombre' type="text" name='nombre' value={producto.nombre} onChange={manejoCambioInput}required /> 
                    {error.nombre &&<p  style={{ color: 'red' }}>{error.nombre}</p> } 
                </div> 
                <div> 
                    <label htmlFor='precio'>Precio:</label>
                    <input  id="precio" type="number" name='precio' value={producto.precio} onChange={manejoCambioInput} min="0"required />
                    {error.precio && <p style={{color:"red"}}>{error.precio}</p>}
                </div> 
                 <div> 
                    <label htmlFor='stock'>stock:</label>
                    <input  id="stock" type="number" name='stock' value={producto.stock} onChange={manejoCambioInput} min="0"required />
                    {error.stock && <p style={{color:"red"}}>{error.stock}</p>}
                </div> 
                    <div> 
                        <label htmlFor='descripcion'>Descripcion:</label>
                        <textarea id="descripcion" type="text" name='descripcion' value={producto.descripcion} onChange={manejoCambioInput} required />
                         {error.descripcion && <p style={{color:"red"}}>{error.descripcion}</p>}
                    </div>
                    <div> 
                        <label htmlFor='categoria'>Categoria:</label>
                        <input id="categoria" type="text" name='categoria' value={producto.categoria} onChange={manejoCambioInput} required />
                         {error.categoria&& <p style={{color:"red"}}>{error.categoria}</p>}
                    </div>
                     <div> 
                        <label>Imagen URL:</label>
                        <input type="text" name='imagen' value={producto.imagen} onChange={manejoCambioInput} required />
                        {error.imagen && <p style={{color:"red"}}>{error.imagen}</p>}
                    </div>
                    <div className='containerBtn'> 
                <button type='submit' className='btn'> Agregar producto</button>
                <button  className='btn' onClick={cerrarFormulario}> Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioProducto

//
