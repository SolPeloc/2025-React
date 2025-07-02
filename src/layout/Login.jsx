import React,{use, useState} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
const Login = () => {

const{email, setEmail, password, setPassword,error, manejoEnvioForm} = useContext(AuthContext)

  return (
    <div>
      <h1>Login</h1>
      <div className='containerFormulario'>
        <form onSubmit={manejoEnvioForm}> {/* el onSubmit, es un evento, que se dispara cuando el formilario se envia, y la funcion, se ejecuta  cuando el usuario envía el formulario.*/}
          <div>
                <label>Email:</label>
                <input
                type='email'
                placeholder='Ingrese su email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} //setmail, actualiza, el valor de email, - es el evento que ocurre en el <input>. e.target representa el elemento que activó el evento (el <input>). e.target.value obtiene el valor actual que el usuario ingresó.setEmail(e.target.value) actualiza el estado email con el valor del <input>.
              />
              {error.email && <span style={{color: "red"}}>{error.email}</span> //- Si hay un error de email, se muestra un mensaje de error en rojo. - Si no hay error, no se muestra nada.
                }
          </div>
          <div>
            <label> Contraseña: </label>
            <input type="password" 
            placeholder='Ingrese su contraseña'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            {
              error.password &&<span style={{color: "red"}}>{error.password}</span> //- Si hay un error de contraseña, se muestra un mensaje de error en rojo. - Si no hay error, no se muestra nada.
            }
          </div>
          <div className='containerBtn'> 
            <button type='submit' className='btn'>Iniciar Sesión</button> {/*- El botón de tipo submit, envía el formulario cuando se hace clic en él. */}
             <button type='submit' className='btn'><Link to={"/"} style={{color:'white'}}>Volver a la Home</Link></button> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
