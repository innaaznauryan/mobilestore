import { useState, useContext } from 'react'
import {useLocation} from 'react-router-dom'
import {SinglePhoneContext} from "./Context/PhoneContext"
import data from "/public/Phones_Data_Storage/sources/storage.json"

const PhonePics = (props, ref) => {
  const customState = useLocation().state
  const {id, brand, image} = customState
  const [currentPics, setCurrentPics] = useState(() => data.filter(elem => elem.brand == brand))
  const [active, setActive] = useState(1)
  const [state, dispatch] = useContext(SinglePhoneContext)

  const handleClick = (e, index, id) => {
    setActive(index)
    dispatch(currentPics.find(elem => elem.id == id).image)
  }

  return (
    <div className='pic-Container'>
        <div className="wrapper" style={{transform: `translate(${200 - active * 200}px)`}}>
          {currentPics.map(({id, brand, image}, index) => {
            return <img onClick={(e) => handleClick(e, index, id)} className={active == index ? "selected" : ""} key={id} src={`/public/Phones_Data_Storage/images/${brand}/${image}`} alt="pic" />
          })}
        </div>
    </div>
  )
}

export default PhonePics