import {configureStore} from "@reduxjs/toolkit"
import phoneReducer from "./phoneSlice"

const store = configureStore({
    reducer: {
        displayPhone: phoneReducer
    }
})
console.log(phoneReducer)
export default store