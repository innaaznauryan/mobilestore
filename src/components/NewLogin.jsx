import React from 'react'
import withModal from './HOC/withModal'

const NewLogin = (props) => {
  console.log(props)
  return (
   <form action="">


    <input type="text" /><input type="text" /><input type="submit" />
   </form>
  )
}

export default withModal(NewLogin, "Login Form")

NewLogin.defaultProps = {a: 1}