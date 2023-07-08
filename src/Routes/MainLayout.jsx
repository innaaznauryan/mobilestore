import {Context} from '../components/ContextProvider'
import {useContext} from 'react'
import {Route, Outlet, NavLink, Link} from "react-router-dom"
import "./mainLayout.style.scss"
import logo from "../assets/logo.png" 


const MainLayout = () => {
  const [state, dispatch] = useContext(Context)

  return (

<>
<Link to="/login">
<div className="loginDiv">
  <h2>Login</h2>
</div>  
</Link>
<Link to="/signup">
<div className="loginDiv signup">
  <h2>Sign Up</h2>
</div>  
</Link>
    <nav>
      <Link to="/"><img src={logo} alt="" /></Link>
        <ul>


          <li>
            <NavLink className={({isActive})=> isActive? "active" : ""} to="/phone4">Iphone</NavLink>
          </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="/phone1">Samsung</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="/phone2">Xiaomi</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="/phone5">Nokia</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="/phone3">Motorola</NavLink>
        </li>
        </ul>
    </nav>

    {state.activeUser.fName && <div>Hello, {state.activeUser.fName}!</div>}
    <Outlet/>
</>
  )
}

export default MainLayout
