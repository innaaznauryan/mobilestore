import {Routes, Route, NavLink} from "react-router-dom"
import Login from "./components/Login"
import SignUp from './components/SignUp'
import { Context } from './components/ContextProvider'
import { useContext } from 'react'
import "./App.css"

const App = () => {
  const [state, dispatch] = useContext(Context)

  return (
    <>
    {state.activeUser.fName && <div>Hello, {state.activeUser.fName}!</div>}
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
