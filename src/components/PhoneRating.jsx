import React, { useEffect, useState } from 'react';
import {AiFillStar} from "react-icons/ai"

const PhoneRating = ({id}) => {

    const localStorageFunc = () => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            if (key == "phone" + id) return value
        }
    }

    const [rateSum, setRateSum] = useState(() => localStorageFunc() || "");
    const [average, setAverage] = useState(0)

    const handleClick = (e) => {
        let num = e.target.dataset.rateid
        setRateSum(rateSum + num)
        localStorage.setItem("phone" + id, rateSum + num)
    }

    useEffect(() => {
        let avg = rateSum ? calcRate(rateSum) : 0
        setAverage(avg)
    }, [rateSum])

    function calcRate(rate) {
        if (!rate) return;
        let sum = rate.split("").reduce((acc, elem) => +acc + +elem);
        return (sum / rate.length).toPrecision(2)
    }

    return (
    <div onClick={handleClick} className='rating'>
        {Array(5).fill(null).map((_, index) => {
        return(
            <span key={index + 1} data-rateid={index + 1}  className={"star" + ((index < Math.round(average)) ? " selected" : "")}><AiFillStar/></span>
        ) 
        })}
        <span className='avgRating'>{average || "0.0"}</span>

    </div>
   
  )
}

export default PhoneRating