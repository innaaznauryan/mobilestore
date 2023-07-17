import {createContext, useReducer} from 'react'

export const SinglePhoneContext = createContext(null)
const reducer = (state, active) => {
    return active
}

const PhoneContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, null)
  return (
    <SinglePhoneContext.Provider value={[state, dispatch]}>
        {children}
    </SinglePhoneContext.Provider>
  )
}

export default PhoneContext