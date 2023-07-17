import {useState} from 'react'
import withModal from './HOC/withModal'

const Counter = () => {

    const [count, setCount] = useState(0)
   
  return (
    <div >
        <button style={{padding: "15px 25px", fontSize: "25px"}} onClick={()=> setCount(c => c + 1)}>{count}</button>
    </div>
  )
}

export default withModal(Counter, "Counter")