import {useLocation, Link, Outlet} from "react-router-dom"
import "./singlePhone.style.scss"


const SinglePhone = () => {


  const loc = useLocation()
  console.log(loc)
  const {id, brand, image, model, price, quantity, year} = loc.state
  
  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link relative="path" to="..">Go back</Link>
        <hr />
        <img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />


      <Link state={loc.state} to=".">Info </Link> 

      <Link state={loc.state} to="pics">Pics</Link>
      <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.",
    price, year, model}}/>

      

    </div>
  )
}

export default SinglePhone