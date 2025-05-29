import React from 'react'

const Admin = () => {
  
 

  return (
    <div>
      <h1>Bienvenido administrador</h1>
      <p>Esta es la sección de administración.</p>
      <p>Aquí puedes gestionar los usuarios, productos y más.</p>
    </div>
  )
}

export default Admin

//rutas protegidas, 
// si el usuario no es admin, redirigirlo a la página de inicio

// si el usuario es admin, mostrar la sección de administración,
// el replace es para que no se pueda volver atrás con el botón de retroceso del navegador