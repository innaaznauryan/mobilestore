import {createContext, useReducer} from 'react'


export const UserContext = createContext(null)


const credentials = {
    lg: "valod",
    pass: "boo"
}

const initialState = {
    name: "",
    loggedIn: false,
    userId: null
}

const valodState = {
    name: "Valod",
    loggedIn: true,
    userId: 20
}


const reducer = (state, action) => {
    const {type, payload} = action
    console.log(state)

    switch(type) {
        case "LOGIN":
            if(payload.login == credentials.lg
                &&
                payload.password == credentials.pass
                ) 
            return valodState
        default:
            return state
    }
} 

const UserAuthContext = ({children}) => {


    const [activeUser, dispatchActiveUser] = useReducer(reducer, initialState)



  return (

<UserContext.Provider value={[activeUser, dispatchActiveUser]}>
    {children}
</UserContext.Provider>


    )
}

export default UserAuthContext