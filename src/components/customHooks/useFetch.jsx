import {useState, useEffect} from 'react'

const useFetch = (url) => {

    
    const [data, setData] = useState([])
    
    useEffect(()=> {
        
        const controller = new AbortController();
        // console.log(controller)
        
        (async()=> {
            const res = await fetch(url)
            const data = await res.json()
            console.log(url)
            setData(data)
        })()
        console.log("RAN UseFETCH")
    return ()=> controller.abort()
}, [url])

  return data
}

export default useFetch