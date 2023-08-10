import { createSlice } from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("login"))

const loginSlice = createSlice({
    name: "login",
    initialState: {...user},
    reducers: {
        loginUser(state, {payload}) {
            return payload
        }
    }
})

export default loginSlice.reducer
export const {loginUser} = loginSlice.actions