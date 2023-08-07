import {useState} from 'react'
import { Link } from 'react-router-dom'
import data from "../assets/sources/storage.json"
import "./allphones.style.scss"
import Filter from './Filter'
import PhoneComponent from './PhoneComponent'

const AllPhones = () => {
const [phones, setPhones] = useState(data.sort(()=> Math.random() - 0.5))

  return (
<>


<Filter data={data} fn={setPhones} />

    <div className='phone-container'>
      {phones.map(({id, brand, brandId, image, model, price, quantity, year}) => {
        return <div key={id} className="phone">
          <Link to={`products/phone${brandId}/single`} state={{id, brand, image, model, price, quantity, year}}>
            <PhoneComponent {...{id, brand, image, model, price, quantity, year}} />
          </Link>
        </div>
      })}
    </div>
</>
)
}

export default AllPhones