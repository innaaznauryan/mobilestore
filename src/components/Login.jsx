<<<<<<< HEAD
import { useRef } from 'react'
import { Formik } from "formik"
import { useNavigate } from 'react-router-dom'
import { Context } from './ContextProvider'
import { useContext } from 'react'

const Login = () => {

  const [state, dispatch] = useContext(Context)
  const navigate = useNavigate()
  const formRef = useRef()

  const submitLogin = ({email, password}, {resetForm}) => {
    const data = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const value = localStorage.getItem(key)
      if (key.startsWith("user")) data.push(JSON.parse(value))
    }
    // if we don't sign up a user and localStorage is empty use this data for Valod
    if (data.length == 0) data.push({
      fName: "Valod",
      lName: "Kirakosyan",
      email: "valod@mail.ru", 
      password: "boo123"
    })
    data.forEach(elem => {
      if((elem.email == email && elem.password == password)) {
        dispatch({type: "activeUser", payload: {fName: elem.fName, lName: elem.lName, email: elem.email, password: elem.password}})
        navigate("/")
      }
      else {
        dispatch({type: "loginError", payload: "Wrong email or password"})
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
          {state.loginError && <div className='inputError'>{state.loginError}</div>}
        </form>
      }}
    </Formik>
  </>
  )
}

export default Login
=======
import {useContext} from 'react'
import { UserContext } from './Context/UserAuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {



  const nav = useNavigate()
  const [_, dispatchUser] = useContext(UserContext)

  function handleSubmit(e){
    e.preventDefault()
    

    dispatchUser({type: "LOGIN", payload: Object.fromEntries([...new FormData(e.target)])})
    nav("/")

  }

  return (
   <form action="" onSubmit={handleSubmit}>
    <input name='login' type="text" />
    <input name='password' type="password" />
    <input type="submit" value="Submit" />
   </form>
  )
}

export default Login
>>>>>>> master
