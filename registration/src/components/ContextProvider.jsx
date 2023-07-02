import { useReducer, createContext } from 'react'

export const Context = createContext(null)

const reducer = (state, {type, payload}) => {
    console.log(type, payload)
    switch(type) {
        case "loginError":
            return {...state, loginError: payload}
        case "updateKeys":
            return {...state, ...payload}
        default:
            return state
    }
}
const initialState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    password2: "",
    loginError: ""
}

const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider