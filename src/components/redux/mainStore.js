import {configureStore} from "@reduxjs/toolkit"
import phoneReducer from "./phoneSlice"
import loginReducer from "./loginSlice"
import signupReducer from "./signupSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
    reducer: {
        phone: phoneReducer,
        login: loginReducer,
        signup: signupReducer,
        cart: cartReducer
    }
})

export default store