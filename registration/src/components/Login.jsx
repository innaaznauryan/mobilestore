import React, { useRef } from 'react'
import {Formik} from "formik"
import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const reducer = (state, action) => {
    return {...state, error: action.payload}
  }
  const [state, dispatch] = useReducer(reducer, {error: ""})
  const formRef = useRef()

  const submitLogin = ({email, password}, {resetForm}) => {
    const data = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const value = localStorage.getItem(key)
      if (key.startsWith("user")) data.push(JSON.parse(value))
    }
    data.forEach(elem => {
      if((elem.email == email && elem.password == password)) navigate("/")
      else {
        dispatch({payload: "Wrong email or password"})
        formRef.current.reset()
      }
    })
  }

  return ( 
  <>
    <Formik
    initialValues={{email: "", password: ""}}
    onSubmit={submitLogin}>
      {({handleChange, handleSubmit, handleBlur, values, touched, errors, isSubmitting}) => {
        return <form action="" onSubmit={handleSubmit} ref={formRef}>
          <input onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Email' name="email"/>
          <input onChange={handleChange} onBlur={handleBlur} type="password" placeholder='Password' name="password"/>
          <input type="submit" value="Login"/>
          {state.error && <div className='inputError'>{state.error}</div>}
        </form>
      }}
    </Formik>
  </>
  )
}

export default Login
