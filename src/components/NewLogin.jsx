import {useId} from 'react'
import withModal from './HOC/withModal'

const NewLogin = (props) => {

const id = useId()

  return (
   <form action="">


    <input type="text" /><input type="text" /><input type="submit" />
   </form>
  )
}

export default withModal(NewLogin, "Login Form")

NewLogin.defaultProps = {a: 1}