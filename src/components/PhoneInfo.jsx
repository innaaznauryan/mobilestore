import {useOutletContext} from 'react-router-dom'

const PhoneInfo = () => {


    const {description, price, year, model} = useOutletContext()

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