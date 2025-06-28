import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import FormularioProducto from '../components/FormularioProducto'
import FormularioEditar from '../components/FormularioEditar'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from "../context/AuthContext"
import { Link } from 'react-router-dom'
import { ProductoContext } from '../context/ProductoContext'
const Admin = () => {
  const{productos,eliminarProducto,editarProducto,onAgregar} = useContext(ProductoContext)
  const [abrirForm, setAbrirForm] = useState(null) 
  const [productoAEditar, setProductoAEditar] = useState(null) 
  const navigate = useNavigate()
  const{setAutenticacion,autenticacion,setEmail,setPassword,setSalida} = useContext(AuthContext);

  const manejarLogout = () => {
      localStorage.removeItem("auth");
      setAutenticacion(false);
      setSalida(true);
      setEmail("")
      setPassword("")
      navigate("/", {replace: true });
  };
  return (
          <div>
                {autenticacion ? ( 
                  <nav style={{backgroundColor:"#3333"}}> 
                    <ul>
                      <li>
                          <button
                            onClick={ manejarLogout}>
                            <FontAwesomeIcon icon={faRightToBracket}/>
                          </button>
                        </li>
                      <li>
                        <Link to="/admin"> <FontAwesomeIcon icon={faCircleUser}/></Link>
                      </li>
                    </ul>
                  </nav> ) : (<> 
                <Link to="/login"> <FontAwesomeIcon icon={faRightToBracket}/></Link>  
            </>)}
            <div style={{textAlign:"center", margin:"10px"}}> 
              <h1>Bienvenido administrador</h1>
              <p>Panel de productos</p>
            </div >
            <div className='containerTarjetas'> 
                {productos.map((producto) => (
                    <div  key={producto.id} >
                      <div className='estiloTarjeta'>
                          <span>{producto.nombre} </span>
                          <img src={producto.imagen} alt="imagen del producto"/>
                          <span>${producto.precio}</span>
                          <p>{producto.descripcion} </p>
                          <div className='containerBtn'> 
                          <button className='btn' 
                          onClick={() => {
                            setProductoAEditar(producto); 
                            setAbrirForm("editar");}}>
                            Editar
                            </button>
                          <button className='btn' onClick={()=>eliminarProducto(producto.id, producto.nombre)}>Eliminar</button>
                          </div>
                        {abrirForm ==="editar" && productoAEditar?.id === producto.id && // verificamos que el producto a editar sea el mismo que el que estamos editando/
                            ( <div className='acordeon'> 
                            <FormularioEditar  
                            editarProducto ={editarProducto} 
                            productoAEditar={productoAEditar}
                            cerrarModal={()=>setAbrirForm(null)}
                          setProductoAEditar={setProductoAEditar}
                            />
                          </div>  )}
                    </div>
                </div>
              ))}
          </div>
              <button onClick={()=> setAbrirForm("crear")} className='btn' style={{ margin: "0 auto 10px auto", display: "block" }}> Agregar nuevo producto </button>
              {abrirForm === "crear" && (<FormularioProducto onAgregar={onAgregar} cerrarFormulario={()=> setAbrirForm(null)}/>)} {/* le paso a el formulario la funcion de agregar producto nuevo,  */} 
      </div>
  )
}

export default Admin

//rutas protegidas, 
// si el usuario no es admin, redirigirlo a la página de inicio

// si el usuario es admin, mostrar la sección de administración,
// el replace es para que no se pueda volver atrás con el botón de retroceso del navegador
