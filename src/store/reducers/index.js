import { configureStore } from "@reduxjs/toolkit";

import cart from './cartReducers'


const store = configureStore({
    reducer: {
        cart
    }
})

export default store