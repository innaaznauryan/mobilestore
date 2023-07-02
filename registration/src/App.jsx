import React from 'react'
import {Routes, Route, NavLink} from "react-router-dom"
import Login from "./components/Login"
import SignUp from './components/SignUp'
import "./App.css"

const App = () => {
  return (
    <>
    <nav>
      <NavLink className={({isActive}) => {
        return isActive ? "active" : null
        }} to='/login' >Login</NavLink>
      <NavLink className={({isActive}) => {
        return isActive ? "active" : null
        }} to='/signup' >Sign Up</NavLink>
    </nav>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
