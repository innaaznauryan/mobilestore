import React, {useContext} from 'react'
import  RedirectHome  from './RedirectHome'



const Secret = () => {

    if(localStorage.getItem("loggedIn") != "true"){
        return <RedirectHome/>
  
    } else {
        return <div>Secret</div>
    }
  
}

export default Secret