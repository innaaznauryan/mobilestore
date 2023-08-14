import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, {payload}) {
            return [...state, payload]
        }
    }
})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions