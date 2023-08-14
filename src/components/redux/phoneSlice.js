import { createSlice } from "@reduxjs/toolkit"

const phoneSlice = createSlice({
    name: "phone",
    initialState: {
        image: null
    },
    reducers: {
        displayPhone(state, {payload}) {
            state.image = payload
        }
    }
})

export default phoneSlice.reducer
export const {displayPhone} = phoneSlice.actions