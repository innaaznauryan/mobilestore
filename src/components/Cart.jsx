import {useRef} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { removeCart } from "./redux/cartSlice"
import {BsCartXFill} from "react-icons/bs"
import {GrStatusGood} from "react-icons/gr"
import "./cart.style.scss"

const Cart = () => {

  const d = useDispatch()
  const cart = useSelector(state => state.cart)
  const dialogRef = useRef(null)

  const handleClick = () => {
    dialogRef.current.showModal()
    dialogRef.current.style.display = "flex"
    setTimeout(() => {
      dialogRef.current.close()
      dialogRef.current.style.display = "none"
      d(removeCart([]))
    }, 2000);
  }

  return (
  <div className='cartComponent'>
    {
      cart.length == 0 ? 
      <div>
        <BsCartXFill />
        <p>Your cart is empty!</p>
      </div> : 
      <div>
        <p>You have {cart.length} item{cart.length > 1 ? "s" : ""} in your cart</p>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(({id, image, brand, model, price, year}, index) => {
              return <tr key={id}>
                <td>{index + 1}</td>
                <td><img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="phone" /></td>
                <td>{brand}</td>
                <td>{model}</td>
                <td>{year}</td>
                <td>֏ {price}</td>
              </tr>
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>Total:</td>
              <td>֏ {cart.reduce((acc, elem) => +acc + +elem.price, 0)}</td>
            </tr>
          </tfoot>
        </table>
        <br />
        <button onClick={handleClick}>Check out</button>
        <dialog ref={dialogRef} className="dialogCart">
          <GrStatusGood />
          <p>Your order has been placed!</p>
          <p>Thank you for shopping with us!</p>
        </dialog>
      </div>
    }
  </div>
  )
}

export default Cart