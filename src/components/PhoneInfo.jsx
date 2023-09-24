import {useEffect, useRef, useState} from "react"
import {useOutletContext} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {displayPhone} from "./redux/phoneSlice"
import {addToCart} from "./redux/cartSlice"
import Rating from "./Rating"
import {BsFillCartFill} from "react-icons/bs"
import {GrStatusGood} from "react-icons/gr"

const PhoneInfo = () => {

  const {description, id, brand, image, model, price, quantity, year} = useOutletContext()
  const [state, setState] = useState(false)
  const d = useDispatch()
  const login = useSelector(state => state.login)
  const cart = useSelector(state => state.cart)
  const dialogRef = useRef(null)

  useEffect(() => {
    d(displayPhone(null))
    setState(true)
    return () => setState(false)
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleClick = () => {
    d(addToCart({id, brand, image, model, price, quantity, year}))
    dialogRef.current.showModal()
    dialogRef.current.style.display = "flex"
    setTimeout(() => {
      dialogRef.current.close()
      dialogRef.current.style.display = "none"
    }, 2000);
  }

  return (
<div className='info'>
        
  <p>Description: {description}</p>
  <p>{year}</p>
  <h2>{model}</h2>
  <h5>{price} ֏</h5>
  <Rating id={id} state={state} />
  <div className="cartDiv">{login.name && 
    <button onClick={handleClick}>
      <BsFillCartFill /> 
      <span> Add to cart</span>
    </button>}
    <dialog ref={dialogRef} className="dialogCart">
      <GrStatusGood />
      <p className="success">The item successfully added to cart!</p>
    </dialog>
  </div>

</div>
)
}

export default PhoneInfo