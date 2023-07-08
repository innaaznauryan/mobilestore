import React, {useContext} from 'react'
import  RedirectHome  from './RedirectHome'



const Secret = () => {

    if(localStorage.getItem("loggedIn")){
        return <div>Secret</div>
  
    } else {
        return <RedirectHome/>
    }
  
}

export default Secret