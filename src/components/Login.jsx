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