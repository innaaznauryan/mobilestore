import { createSlice } from "@reduxjs/toolkit"

const credentials = {
    lg: "valod",
    pass: "boo"
}

const valodState = {
    name: "Valod",
    loggedIn: true,
    userId: 20
}

const userSlice = createSlice({
    name: "login",
    initialState: {
        name: "",
        loggedIn: false,
        userId: null
    },
    reducers: {
        loginUser(state, {payload}) {
            if(payload.login == credentials.lg && payload.password == credentials.pass) {
                return valodState
            }
            return state
        }
    }
})

export default userSlice.reducer
export const {loginUser} = userSlice.actions