import {createContext, useReducer} from 'react'


export const UserContext = createContext(null)
<<<<<<< HEAD
=======


const credentials = {
    lg: "valod",
    pass: "boo"
}

>>>>>>> master
const initialState = {
    name: "",
    loggedIn: false,
    userId: null
}

<<<<<<< HEAD

const reducer = (state, action) => {
    return state
}

const UserAuthContext = (children) => {
=======
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
    }
    return state
}

const UserAuthContext = ({children}) => {
>>>>>>> master


    const [activeUser, dispatchActiveUser] = useReducer(reducer, initialState)



  return (

<UserContext.Provider value={[activeUser, dispatchActiveUser]}>
    {children}
</UserContext.Provider>


    )
}

export default UserAuthContext