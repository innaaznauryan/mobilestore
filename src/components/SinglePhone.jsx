import {useEffect} from "react"
import {useLocation, Link, Outlet} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {displayPhone} from "./redux/phoneSlice"
import {BsArrowLeftShort} from "react-icons/bs"
import "./singlePhone.scss"

const SinglePhone = () => {

  const customState = useLocation().state
  const {id, brand, image, model, price, quantity, year} = customState

  const d = useDispatch()
  const phone = useSelector(state => state.phone)
  
  useEffect(() => {
    d(displayPhone(null))
  }, [])

  return (
    <main>
    <div className="single">
        <h1>{brand}</h1>
        <Link className="link" relative="path" to=".." state={customState}>Go back</Link>
        <hr />
        {phone.image ? (<img src={`/Phones_Data_Storage/images/${brand}/${phone.image}`} alt="" />) : (<img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />)}
        <hr />
        <div className="links">
          <Link className="link" state={customState} to=".">Info </Link> 
          <Link className="link" state={customState} to="pics">Pics</Link>
        </div>
        <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.", id, brand, image, model, price, quantity, year}}/>

    </div>
    </main>
  )
}

export default SinglePhone