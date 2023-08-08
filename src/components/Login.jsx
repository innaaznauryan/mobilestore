import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from "./redux/userSlice"
import "./login.style.scss"

const Login = () => {


  const nav = useNavigate()
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)
  console.log(login)

  function handleSubmit(e){
    e.preventDefault()
    dispatch(loginUser(Object.fromEntries([...new FormData(e.target)])))
    console.log(login)
    nav("/")
  }

  return (
<>
    <div className='intro'>Have an account? Sign in!</div>
    <form action="" onSubmit={handleSubmit}>
      <input name='login' type="text" placeholder='Login'/>
      <input name='password' type="password" placeholder='Password'/>
      <button type="submit">Submit</button>
    </form>
</>

)
}

export default Login