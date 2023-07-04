import {Route, Outlet, NavLink, Link} from "react-router-dom"
import "./mainLayout.style.scss"


const MainLayout = () => {
  return (

<>
    <nav>
      <Link to="/"><img src="public/logo.png" alt="" /></Link>
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
    <Outlet/>
</>
  )
}

export default MainLayout
