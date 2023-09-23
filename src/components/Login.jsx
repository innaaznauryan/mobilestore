import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from "./redux/loginSlice"

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
    let activeState
    if(FD.login == user?.login && FD.password == user?.password) {
      activeState = {name: user?.fName, loggedIn: true}
      nav("/")
    } else {
      setWrongUser(true)
      activeState = {name: "", loggedIn: false}
    }
    dispatch(loginUser(activeState))
    localStorage.setItem("login", JSON.stringify(activeState))
  }

  return (
<main>
    <div className='intro'>Have an account? Sign in!</div>
    <form action="" onSubmit={handleSubmit} className='loginForm'>
      <input name='login' type="text" placeholder='Login'/>
      <input name='password' type="password" placeholder='Password'/>
      <button type="submit">Sign in</button>
    </form>
    <div className='wrongUser'>{wrongUser ? "Wrong Login or Password!" : ""}</div>
</main>
)
}

export default Login