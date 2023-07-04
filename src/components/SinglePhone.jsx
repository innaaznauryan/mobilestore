import {useLocation, Link} from "react-router-dom"
import "./singlePhone.style.scss"


const SinglePhone = () => {


    const {id, brand, image, model, price, quantity, year} = useLocation().state

  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link relative="path" to="..">Go back</Link>
        <hr />
        <img src={`/src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.</p>
        <h5>{price}</h5>
    </div>
  )
}

export default SinglePhone