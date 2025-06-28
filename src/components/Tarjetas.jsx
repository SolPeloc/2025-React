
import "../assets/styles/tarjetas.css"         
const Tarjetas = ({id,nombre,img,precio, descripcion, className}) => {

  return (
    <div className={className}> {/* le paso classname para que, cuando quiera pasarle estilos */}
      <h2>{nombre}</h2>
      <img src={img} alt="" width={"200px"} />
      <p>Precio: ${precio}</p>
      <p>Descripción:{descripcion}</p>
    </div>
  )
}

export default Tarjetas

