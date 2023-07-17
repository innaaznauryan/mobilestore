<<<<<<< HEAD
import { useOutletContext } from 'react-router-dom'

const PhoneInfo = () => {

    const {description, year, model, price, quantity} = useOutletContext();
  
  return (
    <div className='info_div'>
      <p><span>{"Description: "}</span>{description}</p>
      <div className="price">
          <h3><span>Model:</span>  {model}</h3>
          <h3><span>Production date:</span>  {year}</h3>
          <h3><span>Price:</span>  {price}</h3>
          <h3><span>Quantity:</span>  {quantity}</h3>
        </div>
=======
import {useOutletContext} from 'react-router-dom'

const PhoneInfo = () => {


    const {description, price, year, model} = useOutletContext()

  return (
    <div>
        

<p>Description: {description}</p>
<h2>{model}</h2>
<span>{year}</span>
<h5>${price}</h5>


>>>>>>> master
    </div>
  )
}

export default PhoneInfo