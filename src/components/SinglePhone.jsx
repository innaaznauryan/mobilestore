import {useLocation, Link, Outlet} from "react-router-dom"
import { useContext } from "react"
import {SinglePhoneContext} from "./Context/PhoneContext"
import "./singlePhone.style.scss"


const SinglePhone = () => {

  const [state, dispatch] = useContext(SinglePhoneContext)
  const customState = useLocation().state
  const {id, brand, image, model, price, quantity, year} = customState
console.log(state)

  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link relative="path" to="..">Go back</Link>
        <hr />
        {state ? (<img src={`/Phones_Data_Storage/images/${brand}/${state}`} alt="" />) : (<img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />)}


      <Link state={customState} to=".">Info </Link> 

      <Link state={customState} to="pics">Pics</Link>
      <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.",
    price, year, model}}/>

      

    </div>
  )
}

export default SinglePhone