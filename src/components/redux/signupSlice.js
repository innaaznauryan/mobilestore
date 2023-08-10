import { createSlice } from "@reduxjs/toolkit"

const signup = JSON.parse(localStorage.getItem("signup"))
const activeState = {
    fName: signup.fName || "",
    login: signup.login || "",
    password: signup.password || ""
}

const signupSlice = createSlice({
    name: "signup",
    initialState: {...activeState},
    reducers: {
        signupUser(state, {payload}) {
            return payload
        }
    }
})

export default signupSlice.reducer
export const {signupUser} = signupSlice.actions