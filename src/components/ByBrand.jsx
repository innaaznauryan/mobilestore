import {useParams, Link} from "react-router-dom"
import data from "../assets/sources/storage.json"
import PhoneComponent from "./PhoneComponent"
import "./bBrand.style.scss"

// const init = () => {
//   const obj = {}
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i)
//     const value = +localStorage.getItem(key)
//     if (key.startsWith("phoneid")) obj[key] = value
//   }
//   return obj
// }

const ByBrand = () => {

const {brand} = useParams()

return (
<>

<Link className="goback link" to="/">Go back to all phones</Link>

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
</>
  )
}

export default ByBrand

