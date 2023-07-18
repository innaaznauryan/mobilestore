import { useState, useContext, useRef } from 'react'
import {useLocation} from 'react-router-dom'
import {SinglePhoneContext} from "./Context/PhoneContext"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import data from "/public/Phones_Data_Storage/sources/storage.json"

const PhonePics = () => {
  const {id, brand} = useLocation().state
  const [currentPics, setCurrentPics] = useState(() => data.filter(elem => elem.brand == brand))
  const [active, setActive] = useState(() => currentPics.findIndex(elem => elem.id == id))
  const [state, setState] = useContext(SinglePhoneContext)
  const divRef = useRef(null)

  const handleClick = (id, index) => {
    const array = [...currentPics]
    setState(currentPics.find(elem => elem.id == id).image)
    
    if(index == currentPics.length - 1) {
      array.push(array.shift())
      setCurrentPics(array)
      
      // setActive(currentPics.length - 2)
      // divRef.current.style.transform = ""

    }
    else if (index == 0) {
      array.unshift(array.pop())
      setCurrentPics(array)
      // setActive(currentPics.length - 2)
    }
    else {
      setActive(index)
    }
console.log(active)


  }

  return (
    <div className='pic-Container'>
        <div ref={divRef} className="wrapper" style={{transform: `translate(${200 - active * 200}px)`}}>
          {currentPics.map(({id, brand, image}, index) => {
            return <img onClick={() => handleClick(id, index)} className={active == index ? "selected" : ""} key={id} src={`/public/Phones_Data_Storage/images/${brand}/${image}`} alt="pic" />
          })}
        </div>
    </div>
  )
}

export default PhonePics