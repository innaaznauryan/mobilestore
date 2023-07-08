import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const RedirectHome = () => {
  const [timer, setTimer] = useState(5)
  const navigate = useNavigate()
  useEffect(() => {
       const interval = setInterval(setTimer, 1000, timer - 1)
       
       if(timer == 0){
          navigate("/")
          clearInterval(interval)
       }

       return () => clearInterval(interval)
  }, [timer])

  return (
    <div>
      <h1>You could not login, you will be redirected to the main page after a few seconds</h1>
      <h2>{timer}</h2></div>
  )
}

export default RedirectHome