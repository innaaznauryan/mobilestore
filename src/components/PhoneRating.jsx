import React, { useState } from 'react';
import {AiFillStar} from "react-icons/ai"

// let rateSum = "";

const PhoneRating = () => {

    const [rateSum, setRateSum] = useState("");
    const [rating, setRating] = useState(0)

    const handleClick = (e) => {
        let num = e.target.dataset.rateid
        setRating(num);
        // rateSum += num;
        setRateSum(rateSum + num);

    }

    function calcRate(rate) {
        if (!rate) return;
        let sum = rate.split("").reduce((acc, elem) => +acc + +elem);
        return sum / rate.length;
    }
    let average = null;
    rateSum ? average =  calcRate(rateSum).toPrecision(2) : "";

  return (
    <div onClick={handleClick} className="rating">
        {Array(5).fill(null).map((_, index) => {
        return(
            <span key={index + 1} data-rateid={index + 1}  className={"star"+ ((index < rating) ? " selected" : "")} q><AiFillStar/></span>
        ) 
        })}
        <span className='avgRating'>{average || "0.0 "}</span>

    </div>
   
  )
}

export default PhoneRating