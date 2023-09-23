import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {displayPhone} from "./redux/phoneSlice"
import data from "../assets/sources/storage.json"
import {BiSolidLeftArrow, BiSolidRightArrow} from "react-icons/bi"
import "./phonePics.scss"

const PhonePics = () => {

  const {id, brand} = useLocation().state
  const d = useDispatch()

  const [currentPics, setCurrentPics] = useState(() => data.filter(elem => elem.brand == brand))
  const [currentIndex, setCurrentIndex] = useState(() => currentPics.findIndex(elem => elem.id == id))
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    d(displayPhone((currentPics[currentIndex].image)))
  }, [currentIndex])

  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", updateScreenWidth)
    updateScreenWidth()
    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  const handleClick = (dir) => {
    switch (dir) {
      case "left":
        setCurrentIndex(prev => (prev - 1 + currentPics.length) % currentPics.length)
        break
      case "right":
        setCurrentIndex(prev => (prev + 1) % currentPics.length)
        break
    }
  }

  return (
    <div className="arrows">
      <BiSolidLeftArrow className="left" onClick={() => handleClick("left")}/>
      <div className='pic-container'>
          <div className="wrapper" style={{ transform: `translateX(${(screenWidth > 600 ? 150 : 100) - currentIndex * (screenWidth > 600 ? 150 : 100)}px)` }}>
            {currentPics.map(({id, brand, image}, index) => {
              return <img className={currentIndex == index ? "selected" : ""} key={id} src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="pic" />
            })}
          </div>
      </div>
      <BiSolidRightArrow className="right" onClick={() => handleClick("right")}/>
    </div>
  )
}

export default PhonePics