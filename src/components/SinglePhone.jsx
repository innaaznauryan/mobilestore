import {useLocation, Link, Outlet} from "react-router-dom"
import "./singlePhone.style.scss"


const SinglePhone = () => {


  const customState = useLocation().state
  console.log(customState)
  const {id, brand, image, model, price, quantity, year} = customState
  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link relative="path" to="..">Go back</Link>
        <img src={`/src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />


      <Link state={customState} to=".">Info </Link> 

      <Link state={customState} to="pics">Pics</Link>
      <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.",
    price, year, model}}/>

      

    </div>
  )
}

export default SinglePhone