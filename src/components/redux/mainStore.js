import {configureStore} from "@reduxjs/toolkit"
import phoneReducer from "./phoneSlice"
import userReducer from "./userSlice"

const store = configureStore({
    reducer: {
        displayPhone: phoneReducer,
        login: userReducer
    }
})

export default store