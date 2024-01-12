import { configureStore } from "@reduxjs/toolkit";

import cart from './slicers/CartSlice'
export const store = configureStore({
    reducer:{
      cart:cart
    }
})