<<<<<<< HEAD
import { useLocation, Link, Outlet } from 'react-router-dom';
import "./singlePhone.style.scss"

const SinglePhone = () => {

    const customState = useLocation().state;
    
    const {id, model, year, price, brand, quantity, image, description} = customState;

  return (
    <div className='single_phone'>
        <h1>{model}</h1>
        <h2> <span>Production date:</span> &nbsp; {year}</h2>
        <Link relative='path' to=".." state={customState}>
          <button style={{margin: 30}}>Go Back</button>
        </Link>
        <hr />
        <div className="desc_img">
          <img src={`/src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
          <div>
            <Link state={customState} to=".">
              <button>Info</button>
            </Link> &nbsp;
            <Link state={customState} to ="pics">
              <button>Pics</button>
            </Link>
            <Outlet context={{description, year, price, model, quantity, brand, image}} />
          </div>
        </div>
        <hr />
=======
import {useLocation, Link, Outlet} from "react-router-dom"
import "./singlePhone.style.scss"


const SinglePhone = () => {


  const customState = useLocation().state
  const {id, brand, image, model, price, quantity, year} = customState
  
  return (
    <div className="single">
        <h1>{brand}</h1>
        <Link relative="path" to="..">Go back</Link>
        <hr />
        <img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />


      <Link state={customState} to=".">Info </Link> 

      <Link state={customState} to="pics">Pics</Link>
      <Outlet context={{description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tenetur voluptate eius. Inventore quidem delectus cum at, officia quas iure tempore deserunt, id accusamus deleniti vitae ex recusandae, numquam distinctio.",
    price, year, model}}/>

      

>>>>>>> master
    </div>
  )
}

export default SinglePhone