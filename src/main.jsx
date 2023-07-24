import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import UserAuthContext from './components/Context/UserAuthContext'
import store from './components/redux/mainStore.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <UserAuthContext>
          <Provider store={store}>

            <App />
          </Provider>
     </UserAuthContext>
    </BrowserRouter>

)
