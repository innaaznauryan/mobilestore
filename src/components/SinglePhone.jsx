import { useEffect} from "react"
import {useLocation, Link, Outlet} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {BsFillCartFill} from "react-icons/bs"
import {displayPhone} from "./redux/phoneSlice"
import { addToCart } from "./redux/cartSlice"
import "./singlePhone.style.scss"

const SinglePhone = () => {

  const customState = useLocation().state
  const {id, brand, image, model, price, quantity, year} = customState

  const d = useDispatch()
  const phone = useSelector(state => state.phone)
  const login = useSelector(state => state.login)
  const cart = useSelector(state => state.cart)
  console.log(cart)
  
  useEffect(() => {
    d(displayPhone(null))
  }, [])

  const handleClick = () => {
    d(addToCart({id, brand, image, model, price, quantity, year}))
  }

  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link className="link" relative="path" to=".." state={customState}>Go back</Link>
        <hr />
        {phone.image ? (<img src={`/Phones_Data_Storage/images/${brand}/${phone.image}`} alt="" />) : (<img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />)}

      <div className="links">
        <Link className="link" state={customState} to=".">Info </Link> 
        <Link className="link" state={customState} to="pics">Pics</Link>
      </div>
      <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.",
    price, year, model}}/>

      <div className="cartDiv">{login.name && 
        <button onClick={handleClick}><BsFillCartFill /> <span>Add to cart</span></button>}
      </div>

      

    </div>
  )
}

export default SinglePhone