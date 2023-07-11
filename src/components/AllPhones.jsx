import {useState} from 'react'
import { Link } from 'react-router-dom'
import data from "../assets/sources/storage.json"
import "./allphones.style.scss"
import NarekFilter from './NarekFilter'

const AllPhones = () => {
const [phones, setPhones] = useState(data.sort(()=> Math.random() - 0.5))






  return (
   <>
<NarekFilter data={data} fn={setPhones}/>

    <div className='phone-container'>{phones.map(({id, brand, brandId, image, model, price, quantity, year}) => {
      
      return <Link key={id} to={`products/phone${brandId}/single`} state={{id, brand, image, model, price, quantity, year}}>
      <div className="phone">
          <h4>{brand}</h4>
          <h2>{model}</h2>
          <img src={`public/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
          <span>{price}</span>
        </div>
     </Link>

})}</div>
</>
  )
}

export default AllPhones