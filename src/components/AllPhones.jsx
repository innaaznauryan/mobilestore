import {useState} from 'react'
import {Link, useOutletContext} from 'react-router-dom'
import {useSelector} from "react-redux"
import Filter from './Filter'
import PhoneComponent from './PhoneComponent'
import data from "../assets/sources/storage.json"
import "./allphones.scss"

const AllPhones = () => {

const [phones, setPhones] = useState(data.sort(()=> Math.random() - 0.5))
const login = useSelector(state => state.login)
const signup = useSelector(state => state.signup)
const {filterMode, setFilterMode} = useOutletContext()

  return (
<main>

<Filter data={data} setPhones={setPhones} filterMode={filterMode} setFilterMode={setFilterMode} />

<h1 className='greet'>{signup.fName ? (login.name ? `Hello, ${login.name}!` : "Sign in for shopping!") : "Sign up for shopping!"}</h1>

    <div className='phone-container'>
      {phones.map(({id, brand, brandId, image, model, price, quantity, year}) => {
        return <div key={id} className="phone">
          <Link to={`products/phone${brandId}/single`} state={{id, brand, image, model, price, quantity, year}}>
            <PhoneComponent {...{id, brand, image, model, price, quantity, year}} />
          </Link>
        </div>
      })}
    </div>
</main>
)
}

export default AllPhones