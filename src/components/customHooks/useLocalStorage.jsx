import {useState, useEffect} from 'react'

const useLocalStorage = (key) => {


const [value, setValue] = useState(()=> localStorage.getItem(key))


useEffect(()=> {
    
    setValue(localStorage.getItem(key))
    
}, [key])

const setNewKey = (k, v) => {{
    localStorage.setItem(k, v)
    setValue(v)
}}

  return (
    [value, setNewKey]
  )
}

export default useLocalStorage