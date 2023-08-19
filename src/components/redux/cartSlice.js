import { createSlice } from "@reduxjs/toolkit"

const cart = JSON.parse(localStorage.getItem("cart")) || []

const cartSlice = createSlice({
    name: "cart",
    initialState: cart,
    reducers: {
        addToCart(state, {payload}) {
            return [...state, payload]
        },
        removeCart(state, {payload}) {
            return payload
        }
    }
})

export default cartSlice.reducer
export const {addToCart, removeCart} = cartSlice.actions