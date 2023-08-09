import {configureStore} from "@reduxjs/toolkit"
import phoneReducer from "./phoneSlice"
import loginReducer from "./loginSlice"
import signupReducer from "./signupSlice"

const store = configureStore({
    reducer: {
        displayPhone: phoneReducer,
        login: loginReducer,
        signup: signupReducer
    }
})

export default store