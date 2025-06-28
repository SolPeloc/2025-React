import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './context/CartContex.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProductoProvider } from './context/ProductoContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <AuthProvider>
          <CarritoProvider> 
            <ProductoProvider> 
              <App />
            </ProductoProvider>
          </CarritoProvider>
        </AuthProvider>
      </Router>   
  </StrictMode>
)
// importamos  router, 
// y envolvemos a App.js en el componente Router.
//importamos al carritocontexto para que  envuelva a router y a app, esto
//va a permitir que cualquier componente dentro de app y router puede usar el contextocarrito