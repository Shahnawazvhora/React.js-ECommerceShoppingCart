import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";

export const CartStore = configureStore({
    reducer: {
        cartItem: CartSlice
    }
})