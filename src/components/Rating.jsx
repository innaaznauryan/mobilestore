import { useReducer } from "react"
import {AiFillStar} from "react-icons/ai"

const init = () => {
    const obj = {}
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const value = localStorage.getItem(key)
      if (key.startsWith("phoneid")) obj[key] = value
    }
    return obj
}

const Rating = ({id}) => {

const reducer = (state, {type, payload}) => {
    return {...state, [type]: payload}
    } 
const [state, dispatch] = useReducer(reducer, {}, init)

const handleClick = (e) => {
    const {phoneid, rateid} = e.target.dataset
    if(state.hasOwnProperty("phoneid" + phoneid)) {
      dispatch({type: "phoneid" + phoneid, payload: state["phoneid" + phoneid] + rateid})
      localStorage.setItem("phoneid" + phoneid, state["phoneid" + phoneid] + rateid)
    }
    else {
      dispatch({type: "phoneid" + phoneid, payload: rateid})
      localStorage.setItem("phoneid" + phoneid, rateid)
    }
  }
  
const average = (string) => {
    if(string) {
        if(string.length == 1) return +string
        const arr = string.split("")
        const rating = arr.reduce((acc, elem) => +acc + +elem) / arr.length
        console.log(rating)
        return rating
    }
    return 0
}

    return (<div className="rating">
        {Array(5).fill(null).map((_, index) => {
            return <span key={index + 1} data-rateid={index + 1} data-phoneid={id} className={"star"+ (index + 1 <= average(state["phoneid" + id]) ? " selected" : "")} onClick={handleClick}><AiFillStar/></span>
        })}
    </div>
    )

}

export default Rating