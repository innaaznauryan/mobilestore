import {useLocation, Link, Outlet} from "react-router-dom"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {displayPhone} from "./redux/phoneSlice"
import "./singlePhone.style.scss"

const SinglePhone = () => {

  const customState = useLocation().state
  const {id, brand, image, model, price, quantity, year} = customState

  const d = useDispatch()
  const phone = useSelector(({displayPhone}) => { 
    return displayPhone})

  useEffect(() => {
    d(displayPhone(null))
  }, [])

  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link className="link" relative="path" to=".." state={customState}>Go back</Link>
        <hr />
        {phone.image ? (<img src={`/Phones_Data_Storage/images/${brand}/${phone.image}`} alt="" />) : (<img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />)}


      <Link className="link" state={customState} to=".">Info </Link> 

      <Link className="link" state={customState} to="pics">Pics</Link>
      <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.",
    price, year, model}}/>

      

    </div>
  )
}

export default SinglePhone