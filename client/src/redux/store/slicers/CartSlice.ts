import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    cart: Array<any>
}


const initialState: CartState  = {
    cart: JSON.parse(localStorage.getItem("items") || "[]"),
}

export const CartSlice = createSlice({
    name: "cart",
  initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            localStorage.setItem("items", JSON.stringify(state.cart))
            
        },
        removeFromCart: (state, action) => {
          state.cart = state.cart.find((x) =>x.id !== action.payload.id)
            localStorage.setItem("items", JSON.stringify(state.cart));
        },
       


    }
})

export const {addToCart, removeFromCart} = CartSlice.actions
export default CartSlice.reducer;