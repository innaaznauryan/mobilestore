import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./error.style.scss"


const Error = () => {

const [timer, setTimer] = useState(5)
const goSomewhere = useNavigate()

useEffect(()=> {

  const interval = setInterval(() => {
    setTimer(p => p - 1)
  }, 1000)
  if (timer == 0) goSomewhere("/")
  return ()=> clearInterval(interval)

}, [timer])

console.log("ERROR")
   return (

    <div className='cont'>
        <div className='time'>
          <p>After 5 seconds, you will be automatically transferred to the main page, if you do not want the transfer to take place, click "Cancel"</p>
          <h2>{timer}</h2>
        </div>
        
        <div className='info'>
          <h1>Error 404</h1>
          <h3>Page not found</h3>
          <img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png" alt="" />
        </div>
    </div>

   )
 }
 
 export default Error

