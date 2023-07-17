import { useState, useContext } from 'react'
import {useLocation} from 'react-router-dom'
import {SinglePhoneContext} from "./Context/PhoneContext"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import data from "/public/Phones_Data_Storage/sources/storage.json"

const PhonePics = () => {
  const {id, brand} = useLocation().state
  const [currentPics, setCurrentPics] = useState(() => data.filter(elem => elem.brand == brand))
  const [active, setActive] = useState(() => currentPics.findIndex(elem => elem.id == id))
  const [state, dispatch] = useContext(SinglePhoneContext)

  const handleClick = (id, index, arr) => {
    setActive(index)
    dispatch(arr.find(elem => elem.id == id).image)
  }

  return (
    <div className='pic-Container'>
        <div className="wrapper" style={{transform: `translate(${200 - active * 200}px)`}}>
          {currentPics.map(({id, brand, image}, index, arr) => {
            return <img onClick={() => handleClick(id, index, arr)} className={active == index ? "selected" : ""} key={id} src={`/public/Phones_Data_Storage/images/${brand}/${image}`} alt="pic" />
          })}
        </div>
    </div>
  )
}

export default PhonePics