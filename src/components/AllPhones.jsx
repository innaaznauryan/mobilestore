import {useState} from 'react'
import data from "../assets/Phones_Data_Storage/sources/storage.json"
import "./allphones.style.scss"

const AllPhones = () => {
const [phones, setPhones] = useState(data)
console.log(data)
  return (
    <div className='phone-container'>{phones.map(({id, brand, image, model, price, quantity, year}) => {
     return <div key={id} className="phone">
        <h4>{brand}</h4>

        <h2>{model}</h2>
        <img src={`src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
        <span>{price}</span>
        

      </div>
    })}</div>
  )
}

export default AllPhones