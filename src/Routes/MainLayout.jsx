import {useState} from "react"
import {useLocation, Outlet, NavLink, Link} from "react-router-dom"
import {useSelector} from "react-redux"
import AboutUs from "./Info/AboutUs"
import OurValues from "./Info/OurValues"
import {BsFillCartFill} from "react-icons/bs"
import logo from "../assets/Logo.png"
import "./mainLayout.style.scss"


const MainLayout = () => {

  const login = useSelector(state => state.login)
  const cart = useSelector(state => state.cart)
  const [filterMode, setFilterMode] = useState(false)
  const location = useLocation()

return (
<>
    <Link to="/login">
      <div className="loginDiv">Sign In</div>  
    </Link>
    <Link to="/signup">
      <div className="loginDiv singupDiv">Sign Up</div>
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

        <div>{login.name && 
          <Link to="/cart" className="cart">
            <BsFillCartFill />
            {cart.length == 0 ? null : <div className="add">{cart.length}</div>}
          </Link>}
        </div>
    </nav>

    <Outlet context={{filterMode, setFilterMode}}/>

    <aside>
      {location.pathname == "/" && <button className="searchbtn" onClick={() => setFilterMode(true)}>Search</button>}
      <AboutUs/>
      <OurValues/>
    </aside>
</>
  )
}

export default MainLayout
