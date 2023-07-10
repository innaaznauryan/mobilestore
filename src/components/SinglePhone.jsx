import { useLocation, Link, Outlet } from 'react-router-dom';
import "./singlePhone.style.scss"

const SinglePhone = () => {

    const customState = useLocation().state;
    
    const {id, model, year, price, brand, quantity, image, description} = customState;

  return (
    <div className='single_phone'>
        <h1>{model}</h1>
        <h2> <span>Production date:</span> &nbsp; {year}</h2>
        <Link relative='path' to=".." state={customState}>
          <button style={{margin: 30}}>Go Back</button>
        </Link>
        <hr />
        <div className="desc_img">
          <img src={`/src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
          <div>
            <Link state={customState} to=".">
              <button>Info</button>
            </Link> &nbsp;
            <Link state={customState} to ="pics">
              <button>Pics</button>
            </Link>
            <Outlet context={{description, year, price, model, quantity, brand, image}} />
          </div>
        </div>
        <hr />
    </div>
  )
}

export default SinglePhone