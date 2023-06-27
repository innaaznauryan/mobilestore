import React, { useEffect, useReducer, useRef} from 'react'
import "./error.style.scss"

const reducer = (state, action) => {
    if(action.type == "timer"){
      
      if(state.seconds <= 0 ) {
        backHome()
        

         return state
      }

      
        return {seconds: state.seconds - 1}
     
     
    }
    
}

function backHome(){
  location.assign("/")
}


const Error = () => {
  const initialState = {
    seconds:5,
    

  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const divRef = useRef(null)
   let timer = null  
  const handleClick = () => {
    if(state.seconds){
      clearInterval(timer)
      timer = null
      divRef.current.innerText = ""
    }
    
    } 

  useEffect(()=> {
    

   timer = setTimeout(() => {
    
   
    dispatch({
      type:"timer"

    
   })
   
    
    
  
  }, 1000)

    
 
    
      
    
   
  }, [initialState])

 

  return (
    <div className='cont'>
      <div className='time'>
        <div ref={divRef}>
        <p>After 5 seconds, you will be automatically transferred to the main page, if you do not want the transfer to take place, click "Cancel"</p>
        <h2>{state.seconds}</h2>
      
      <button onClick={handleClick}>Cancel</button>
        </div>
       
     
        
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