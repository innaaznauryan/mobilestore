import React, {useState, useEffect, useRef} from 'react'
import useMouse from './customHooks/useMouse'
import withModal from './HOC/withModal'
import useFetch from './customHooks/useFetch'
import useLocalStorage from './customHooks/useLocalStorage'



const Counter = () => {


const divRef = useRef(null)
const [count, setCount] = useState(0)

const mouseCoords = useMouse()
const data = useFetch("https://jsonplaceholder.typicode.com/comments")

const [stored, setStored] = useLocalStorage("admin")

// console.log(stored)

//_____

useEffect(()=> {
divRef.current.scrollTop  = 150
console.log(divRef.current.scrollHeight)
}, [data])


  return (
    <div onScroll={()=> console.log("asdasd")} ref={divRef}>
        <button style={{padding: "15px 25px", fontSize: "25px"}} onClick={()=> {
          setCount(c => c + 1)
          divRef.current.scrollBy(0, 150)
          setStored("valod", "kikos")
        }}>{count}</button>
        <h1>{mouseCoords.x}, {mouseCoords.y}, </h1>
        <hr />
{data && data.slice(0, 20).map(({name, body, id}) => (
  <React.Fragment key={id}>
  <h2>{name}</h2>
  <p>{body}</p>
  <hr />
  </React.Fragment>
))}
    </div>
  )
}

export default withModal(Counter, "Counter")