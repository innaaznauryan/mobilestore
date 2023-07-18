import {createContext, useReducer, useState} from 'react'

export const SinglePhoneContext = createContext(null)

const PhoneContext = ({children}) => {
    const [state, setState] = useState(null)
  return (
    <SinglePhoneContext.Provider value={[state, setState]}>
        {children}
    </SinglePhoneContext.Provider>
  )
}

export default PhoneContext