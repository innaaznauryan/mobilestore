import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import UserAuthContext from './components/Context/UserAuthContext'
import PhoneContext from './components/Context/PhoneContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <UserAuthContext>
        <PhoneContext>
          <App />
        </PhoneContext>
     </UserAuthContext>
    </BrowserRouter>

)
