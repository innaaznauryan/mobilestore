import {Route, Outlet, NavLink, Link} from "react-router-dom"
import "./mainLayout.style.scss"
import logo from "../assets/Logo.png" 
import AboutUs from "./Info/AboutUs"
import OurValues from "./Info/OurValues"
import Counter from "../components/Counter"
import NewLogin from "../components/NewLogin"


const MainLayout = () => {
  return (

<>


    <Link to="/login">
      <div className="loginDiv">
        <h2>Login</h2>
      </div>  
    </Link>
    <nav>
      <Link to="/"><img src={logo} alt="" /></Link>
        <ul>


          <li>
            <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone4">Iphone</NavLink>
          </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone1">Samsung</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone2">Xiaomi</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone5">Nokia</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive? "active" : ""} to="products/phone3">Motorola</NavLink>
        </li>
        </ul>
    </nav>
    <aside>

      <Counter/>
      <NewLogin/>

      <AboutUs/>
      <OurValues/>
    </aside>
    <Outlet/>
</>
  )
}

export default MainLayout
