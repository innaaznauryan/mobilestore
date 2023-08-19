import {useOutletContext} from 'react-router-dom'
import { useEffect} from "react"
import { useDispatch } from "react-redux"
import {displayPhone} from "./redux/phoneSlice"
import PhoneRating from "./PhoneRating"

const PhoneInfo = () => {

  const {id, description, price, year, model} = useOutletContext()
  const d = useDispatch()

  useEffect(() => {
    d(displayPhone(null))
  })

  return (
    <div className='info'>
        

<p>Description: {description}</p>
<h2>{model}</h2>
<span>{year}</span>
<h5>${price}</h5>
<PhoneRating id={id}/>


    </div>
  )
}

export default PhoneInfo