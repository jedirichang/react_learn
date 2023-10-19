import { configureStore } from "@reduxjs/toolkit"
import cart from "./cart"
import meals from './meals';


const store = configureStore({
    reducer: {
        cart: cart,
        meals: meals
    }
});

export default store;