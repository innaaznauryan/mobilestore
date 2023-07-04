import {useParams, Link} from "react-router-dom"
import {AiFillStar} from "react-icons/ai"
import data from "../assets/Phones_Data_Storage/sources/storage.json"
import "./bBrand.style.scss"
const ByBrand = () => {

const {brand} = useParams()


return (
    <div className='phone-container'>{data.filter(phone => phone.brandId == brand.at(-1))
        
        .map(({id, brand, image, model, price, quantity, year}) => {
     return <div key={id} className="phone">
     <Link key={id} to="single" state={{id, brand, image, model, price, quantity, year}}>
        <h4>{brand}</h4>

        <h2>{model}</h2>
        <img src={`src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
      
      </Link>
      <div className="bottom">
        <div className="year">Model year: {year}</div>
        <div className="rating">

          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
        </div>
          <p>{price}</p>
      </div>
        

      </div>
      
    })}</div>
  )
}

export default ByBrand