import { useReducer, createContext } from 'react'


const initialState = {
    users: [],
    loginError: "",
    activeUser: {
        fName: "",
        lName: "",
        email: "",
        password: ""
    },
    loggedIn: false
}


export const Context = createContext(initialState)

const reducer = (state, {type, payload}) => {
  
    switch(type) {
        case "loginError":
            return {...state,   
            activeUser: {
                fName: "",
                lName: "",
                email: "",
                password: ""
            }, 
            loginError: payload, 
            loggedIn: false}
        case "updateKeys":
            return {...state, users: [...state.users, payload]}
        case "activeUser":
            return {...state, activeUser: payload, loginError: "", loggedIn: true}
        default:
            return state
    }
}


const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider