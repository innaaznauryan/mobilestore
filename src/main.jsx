import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import UserAuthContext from './components/Context/UserAuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
      <UserAuthContext>
        <App />
        
     </UserAuthContext>
    </BrowserRouter>
</StrictMode>
)
