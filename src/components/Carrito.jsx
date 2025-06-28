import React, { useContext } from 'react'
import "../assets/styles/carrito.css" 
import Footer from './Footer' 
import Header from './Header'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons' 
import { CarritoContext } from '../context/CartContex'
const Carrito = () => {
  const {carrito: itemsCarrito,manejarSuma,manejarResta,eliminarProducto, vaciarCarrito}= useContext(CarritoContext)
  return (
    <> 
        <Header/>
            <div className="containerCarrito">
                    <h2>Carrito de compras</h2>
                    {itemsCarrito.length === 0 ? (
                        <p style={{color:"red", textAlign:"center"}}>El carrito esta vacio </p>
                    ) : (
                    <div className="productosCarrito">
                            {itemsCarrito.map((item) => (
                                <div className="producto" key={item.id}>
                                        <img src={item.img} alt="" style={{ width: "100px", objectFit:"cover"}} />
                                        <div className="productoDetalle">
                                                <h3>{item.nombre}</h3>
                                                <p>{item.descripción}</p>
                                        </div>
                                        <div className="productoControl">
                                                <button className="btnSuma" onClick={()=>manejarResta(item.id)}>-</button>
                                                <input type="text" value={item.cantidad}className="inputCantidad" readOnly/>
                                                <button className="btnSuma" onClick={()=>manejarSuma(item.id)}>+</button>
                                                <p>${item.precio * item.cantidad}</p>
                                                <button className="btn" onClick={()=>eliminarProducto(item.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
                                        </div>
                                </div>
                            ))}
                        <div>
                            <h3>Total carrito:</h3>
                            <span>${itemsCarrito.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0)}</span> 
                            <button className= "btn" onClick={()=>vaciarCarrito(itemsCarrito)}>vaciarCarrito</button>
                        </div>
                    </div>
                )}
            </div>
        <Footer/>
    </>);
};



export default Carrito
