import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/features/counterSlice";
import cartSlice from "../store/features/cartSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice
    }
})