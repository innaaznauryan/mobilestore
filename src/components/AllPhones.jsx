import {useState} from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import data from "../assets/Phones_Data_Storage/sources/storage.json"
import "./allphones.style.scss"

const AllPhones = () => {
const [phones, setPhones] = useState(data)

  return (
    <div className='phone-container'>{phones.map(({id, brand, image, model, price, quantity, year, description}) => {
     return <Link key={id} to="single" state={{id, brand, image, model, price, quantity, year, description}}>
      <div className="phone">
          <h4>{brand}</h4>
          <h2>{model}</h2>
          <img src={`src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
=======
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
>>>>>>> master
          <span>{price}</span>
        </div>
     </Link>

<<<<<<< HEAD
    })}</div>
=======
})}</div>
</>
>>>>>>> master
  )
}

export default AllPhones