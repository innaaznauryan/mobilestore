import {useParams, Link} from "react-router-dom"
import data from "../assets/sources/storage.json"
import PhoneComponent from "./PhoneComponent"
import {BsArrowLeftShort} from "react-icons/bs"
import "./byBrand.scss"

const ByBrand = () => {

const {brand} = useParams()

return (
<main>

<Link className="goback link" to="/">
  <BsArrowLeftShort/>
  <span>Go back to all phones</span>
</Link>

  <div className='phone-container'>
    {data.filter(phone => phone.brandId == brand.at(-1))    
    .map(({id, brand, image, model, price, quantity, year}) => {
      return <div key={id} className="phone">
        <Link to="single" state={{id, brand, image, model, price, quantity, year}}>
          <PhoneComponent {...{id, brand, image, model, price, quantity, year}} />
        </Link>
    </div>
    })}
  </div>
</main>
  )
}

export default ByBrand

