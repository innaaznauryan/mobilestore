import {useOutletContext} from 'react-router-dom'
import { useContext, useEffect} from "react"
import {SinglePhoneContext} from "./Context/PhoneContext"

const PhoneInfo = () => {

  const {description, price, year, model} = useOutletContext()
  const [state, setState] = useContext(SinglePhoneContext)

  useEffect(() => {
    setState(null)
  })

  return (
    <div>
        

<p>Description: {description}</p>
<h2>{model}</h2>
<span>{year}</span>
<h5>${price}</h5>


    </div>
  )
}

export default PhoneInfo