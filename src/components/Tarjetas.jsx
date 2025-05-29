
import "../assets/styles/tarjetas.css"
             
const Tarjetas = ({id,nombre,img,precio, descripcion}) => {

  return (
    <div >
      <h2>{nombre}</h2>
      <img src={img} alt="" width={"200px"} />
      <p>Precio: ${precio}</p>
      <p>Descripción:{descripcion}</p>
    </div>
  )
}

export default Tarjetas

