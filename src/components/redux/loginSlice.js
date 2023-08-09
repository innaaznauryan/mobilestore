import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: "login",
    initialState: {
        name: "",
        loggedIn: false
    },
    reducers: {
        loginUser(state, {payload}) {
            return payload
        }
    }
})

export default loginSlice.reducer
export const {loginUser} = loginSlice.actions