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
// const reducer = (state, {type, payload}) => {
//   return {...state, [type]: payload}
// }

// const [state, dispatch] = useReducer(reducer, {}, init)

// Because I couldn't yet figure out how to push ratings into an array in payload of the reducer function for each phone object, and I couldn't count their average rating, so I added every new rating to the previous one and devided by 2

// const handleClick = (e) => {
//   const {phoneid, rateid} = e.target.dataset
//   if(state.hasOwnProperty("phoneid" + phoneid)) {
//     dispatch({type: "phoneid" + phoneid, payload: +((+state["phoneid" + phoneid] + +rateid) / 2).toFixed(2)})
//     localStorage.setItem("phoneid" + phoneid, +((+state["phoneid" + phoneid] + +rateid) / 2).toFixed(2))
//   }
//   else {
//     dispatch({type: "phoneid" + phoneid, payload: +rateid})
//     localStorage.setItem("phoneid" + phoneid, +rateid)
//   }
// }

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

