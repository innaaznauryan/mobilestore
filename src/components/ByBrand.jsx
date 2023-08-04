import {useParams, Link} from "react-router-dom"
import data from "../assets/sources/storage.json"
import PhoneRating from "./PhoneRating"
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

return (<div className="bybrand">
<Link className="link" to="/">Go back to all phones</Link>

<div className='phone-container'>{data.filter(phone => phone.brandId == brand.at(-1))
        
        .map(({id, brand, image, model, price, quantity, year}) => {
     return <div key={id} className="phone">
     <Link key={id} to="single" state={{id, brand, image, model, price, quantity, year}}>
        <h4>{brand}</h4>
        <h2>{model}</h2>
        <img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
      

      <div className="bottom">
        <div className="year">Model year: {year}</div>
        <PhoneRating />
        {/* <div className="rating">
          {Array(5).fill(null).map((_, index) => {
            return <span key={index + 1} data-rateid={index + 1} data-phoneid={id} className={"star"+ ((index + 1 <= state["phoneid" + id]) ? " selected" : "")} onClick={handleClick}><AiFillStar/></span>
          })}
        </div> */}
          <p>Price: ${price}</p>
      </div>
      </Link>
        

      </div>
      
    })}</div>
</div>
    
  )
}

export default ByBrand

