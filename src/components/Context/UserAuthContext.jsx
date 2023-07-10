import {createContext, useReducer} from 'react'


export const UserContext = createContext(null)
const initialState = {
    name: "",
    loggedIn: false,
    userId: null
}


const reducer = (state, action) => {
    return state
}

const UserAuthContext = (children) => {


    const [activeUser, dispatchActiveUser] = useReducer(reducer, initialState)



  return (

<UserContext.Provider value={[activeUser, dispatchActiveUser]}>
    {children}
</UserContext.Provider>


    )
}

export default UserAuthContext