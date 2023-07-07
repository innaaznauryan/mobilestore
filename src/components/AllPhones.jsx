import {useState} from 'react'
import { Link } from 'react-router-dom'
import data from "../assets/Phones_Data_Storage/sources/storage.json"
import "./allphones.style.scss"

const AllPhones = () => {
const [phones, setPhones] = useState(data)

  return (
    <div className='phone-container'>{phones.map(({id, brand, image, model, price, quantity, year}) => {
     return <Link key={id} to="single" state={{id, brand, image, model, price, quantity, year}}>
      <div className="phone">
          <h4>{brand}</h4>
          <h2>{model}</h2>
          <img src={`src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
          <span>{price}</span>
        </div>
     </Link>

    })}</div>
  )
}

export default AllPhones