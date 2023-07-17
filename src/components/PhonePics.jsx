<<<<<<< HEAD
import React, { useState } from 'react'
import { useLocation, useOutletContext, Link } from 'react-router-dom';
import data from "../assets/Phones_Data_Storage/sources/storage.json";

const PhonePics = () => {

  
  const {brand, image} = useOutletContext();
  const customState = useLocation().state;
  const [num, setNum] = useState(Math.ceil(Math.random() * 10));

  function handleChange() {
    let n = num;
    if (n === 10) n = 0;
    setNum(n + 1)
  }

  return (
    <>
    <div className='image_div'>
          <img onClick={handleChange} src={`/src/assets/Phones_Data_Storage/images/${brand}/${image.slice(0,-4).replace(/[0-9]/g, '') + num + ".png"}`} alt="" />
          <button onClick={handleChange}>Next pics</button>
    </div>
    <div className="pics_container" onClick={(e) => {
            const num = +e.target.dataset.picsid;
            setNum(num);
          }}>
      {data
        .filter(phone => phone.brand.toLowerCase() === brand.toLowerCase())
        .map(({id,image}, i) => {
          return <Link key={id}  state={customState}>
                  <img data-picsid={i + 1} src={`/src/assets/Phones_Data_Storage/images/${brand}/${image}`} alt="" />
                </Link>
        } )
        }
    </div>
    </>
=======
import React from 'react'

const PhonePics = () => {
  return (
    <div>PhonePics</div>
>>>>>>> master
  )
}

export default PhonePics