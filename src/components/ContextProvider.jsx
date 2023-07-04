import { useReducer, createContext } from 'react'


const initialState = {
    users: [],
    loginError: "",
    activeUser: {
        fName: "",
        lName: "",
        email: "",
        password: ""
    }
}


export const Context = createContext(initialState)

const reducer = (state, {type, payload}) => {
    console.log(state)
    switch(type) {
        case "loginError":
            return {...state, loginError: payload}
        case "updateKeys":
            return {...state, users: [...state.users, payload]}
        case "activeUser":
            return {...state, activeUser: payload}
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