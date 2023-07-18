import {useState, useEffect} from 'react'

const useMouse = () => {


    const [coords, setCoords] = useState({x: 0, y: 0})


useEffect(()=> {


const trackMouse = function(e) {
    setCoords({x: e.clientX, y: e.clientY})
}

window.addEventListener("mousemove", trackMouse)

return ()=> {window.removeEventListener("mousemove", trackMouse)}

}, [])

  return coords
}

export default useMouse