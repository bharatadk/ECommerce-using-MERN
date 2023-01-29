import { configureStore } from "@reduxjs/toolkit";

import {
    productReducer,
    productDetailReducer,
} from "./reducers/productReducer";

import { cartReducer } from "./reducers/cartReducer";
export const store = configureStore({
    reducer: {
        getProducts: productReducer,
        getProductDetail: productDetailReducer,
        cart: cartReducer,
    },
});
