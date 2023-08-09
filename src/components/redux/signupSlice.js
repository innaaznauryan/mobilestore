import { createSlice } from "@reduxjs/toolkit"

const signupSlice = createSlice({
    name: "signup",
    initialState: {
        fName: "",
        login: "",
        password: ""
    },
    reducers: {
        signupUser(state, {payload}) {
            return payload
        }
    }
})

export default signupSlice.reducer
export const {signupUser} = signupSlice.actions