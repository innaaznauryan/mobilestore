import { useReducer, createContext } from 'react'

export const Context = createContext(null)

const reducer = (state, {type, payload}) => {
    console.log(state)
    // console.log({users: [...users, payload]})
    switch(type) {
        case "loginError":
            return {...state, loginError: payload}
        case "updateKeys":
            return {...state, users: [...state.users, payload]}
        default:
            return state
    }
}
const initialState = {
    users: [],
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