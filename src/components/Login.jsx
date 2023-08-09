import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from "./redux/loginSlice"
import "./login.style.scss"

const Login = () => {

  const user = JSON.parse(localStorage.getItem("signup"))

  const nav = useNavigate()
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)
  console.log(login)

  const [wrongUser, setWrongUser] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    const FD = Object.fromEntries([...new FormData(e.target)])
    if(FD.login == user?.login && FD.password == user?.password) {
      const activeState = {name: user?.fName, loggedIn: true}
      dispatch(loginUser(activeState))
      localStorage.setItem("login", JSON.stringify(activeState))
      nav("/")
    } else setWrongUser(true)
  }

  return (
<>
    <div className='intro'>Have an account? Sign in!</div>
    <form action="" onSubmit={handleSubmit}>
      <input name='login' type="text" placeholder='Login'/>
      <input name='password' type="password" placeholder='Password'/>
      <button type="submit">Submit</button>
    </form>
    {wrongUser && <div className='wrongUser'>Wrong Login or Password</div>}
</>
)
}

export default Login