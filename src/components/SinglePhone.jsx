import {useLocation, Link, Outlet} from "react-router-dom"
import { useContext } from "react"
import {SinglePhoneContext} from "./Context/PhoneContext"
import data from "/public/Phones_Data_Storage/sources/storage.json"
import "./singlePhone.style.scss"


const SinglePhone = () => {

  const [state, setState] = useContext(SinglePhoneContext)
  const customState = useLocation().state
  const {id, brand, image, model, price, quantity, year} = customState

  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link className="link" relative="path" to="..">Go back</Link>
        <hr />
        {image.includes(state?.slice(0, 4)) ? (<img src={`/Phones_Data_Storage/images/${brand}/${state}`} alt="" />) : (<img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />)}


      <Link className="link" state={customState} to=".">Info </Link> 

      <Link className="link" state={customState} to="pics">Pics</Link>
      <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.",
    price, year, model}}/>

      

    </div>
  )
}

export default SinglePhone