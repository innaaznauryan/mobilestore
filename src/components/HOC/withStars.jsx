import React from 'react'

const withStars = (Component) => {
  return () => {

    return (
        <div onClick={handleClick} className="rating">
        {Array(5).fill(null).map((_, index) => {
        return(
            <Component/>
        ) 
        })}
        <span className='avgRating'>{average || "0.0 "}</span>

    </div>
    )
  }
}

export default withStars