import {useEffect, useState} from "react"
import {useLocation, Outlet, Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import AboutUs from "./Info/AboutUs"
import OurValues from "./Info/OurValues"
import NavMenu from "./NavMenu"
import {BsFillCartFill} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import logo from "/Logo.png"
import "./mainLayout.scss"


const MainLayout = () => {

  const login = useSelector(state => state.login)
  const cart = useSelector(state => state.cart)
  const [filterMode, setFilterMode] = useState(false)
  const [toggle, setToggle] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setToggle(!toggle)

  useEffect(() => {
    setToggle(false)
  }, [location])

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
        
        <ul className="menu largeMenu">
          <NavMenu/>
        </ul>

        <div className="iconMenu">
          <AiOutlineMenu onClick={toggleMenu}/>
          <ul className={"menu" + (toggle ? " openMenu" : "")}>
            <NavMenu/>
          </ul>
        </div>

        <div className="cartMenu">{login.name && 
          <Link to="/cart" className="cart">
            <BsFillCartFill />
            {cart.length == 0 ? null : <div className="added">{cart.length}</div>}
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
