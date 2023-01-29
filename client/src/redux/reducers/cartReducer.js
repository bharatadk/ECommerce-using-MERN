import { createReducer, createAction } from "@reduxjs/toolkit";

const initialCartState = {
    cartItems: [],
};

const addToCartRequest = createAction("addToCartRequest");
const addToCart = createAction("addToCart");
const addToCartFail = createAction("addToCartFail");
const removeFromCart = createAction("removeFromCart");

export const cartReducer = createReducer(initialCartState, (builder) => {
    builder
        .addCase(addToCartRequest, (state) => {
            state.loading = true;
        })
        .addCase(addToCart, (state, action) => {
            state.loading = false;
            const newItem = action.payload;
            const existItem = state.cartItems.find(
                (product) => product.id === newItem.id
            );
            if (existItem) {
                console.log("eixst");
                state.cartItems = state.cartItems;
            } else {
                state.cartItems = [...state.cartItems, newItem];
            }
        })
        .addCase(addToCartFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(removeFromCart, (state, action) => {
            state.cartItems = state.cartItems.filter(
                (product) => product.id !== action.payload
            );
        });
});
