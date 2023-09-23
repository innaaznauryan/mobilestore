import {useRef} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {removeCart} from "./redux/cartSlice"
import {BsCartXFill} from "react-icons/bs"
import {GrStatusGood} from "react-icons/gr"
import {AiFillDelete} from "react-icons/ai"
import "./cart.scss"

const Cart = () => {

  const d = useDispatch()
  const cart = useSelector(state => state.cart)
  const dialogRef = useRef(null)

  const deleteItem = (array, id) => {
    array.splice(array.findIndex(elem => elem.id == id), 1)
    return array
  }

  const handleClick = () => {
    dialogRef.current.showModal()
    dialogRef.current.style.display = "flex"
    setTimeout(() => {
      dialogRef.current.close()
      dialogRef.current.style.display = "none"
      d(removeCart([]))
      localStorage.removeItem("cart")
    }, 2000);
  }

  const handleDelete = (id) => {
    const cartState = [...cart]
    const updatedCart = deleteItem(cartState, id)
    d(removeCart(updatedCart))
    updatedCart.length ? localStorage.setItem("cart", JSON.stringify(updatedCart)) : localStorage.removeItem("cart")
  }

  return (
  <main>
  <div className='cartComponent'>
    {
      cart.length == 0 ? 
      <>
        <BsCartXFill className='empty'/>
        <p>Your cart is empty!</p>
      </> : 
      <>
        <p>You have {cart.length} item{cart.length > 1 ? "s" : ""} in your cart</p>

            {cart.map(({id, image, brand, model, price}, index) => {
              return <div className="item">
                <div className='order'>{index + 1}</div>
                <div className="image">
                  <img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="phone"/>
                </div>
                <div className="desc">
                  <span>Brand: {brand}</span>
                  <span>Model: {model}</span>
                  <span>Price: {price} ֏</span>
                </div>
                <div className="delete">
                  <AiFillDelete onClick={() => handleDelete(id)}/>
                </div>
              </div>
            })}
            <p>Total: {cart.reduce((acc, elem) => +acc + +elem.price, 0)} ֏</p>

        <button onClick={handleClick}>Check out</button>
        <dialog ref={dialogRef} className="dialogCart">
          <GrStatusGood />
          <p>Your order has been placed!</p>
          <p>Thank you for shopping with us!</p>
        </dialog>
      </>
    }
  </div>
  </main>
  )
}

export default Cart