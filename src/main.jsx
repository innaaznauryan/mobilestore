<<<<<<< HEAD
import React from 'react'
=======
import React, { StrictMode } from 'react'
>>>>>>> master
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
<<<<<<< HEAD
import ContextProvider from './components/ContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
        
     </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
=======
import UserAuthContext from './components/Context/UserAuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
      <UserAuthContext>
        <App />
        
     </UserAuthContext>
    </BrowserRouter>
</StrictMode>
>>>>>>> master
)
