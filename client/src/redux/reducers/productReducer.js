import { createReducer, createAction } from "@reduxjs/toolkit";
import * as actionTypes from "../constants/productConstants.js";

const initialProductsState = {
    products: [],
};

const getProductRequest = createAction("getProductRequest");
const getProductSuccess = createAction("getProductSuccess");
const getProductFail = createAction("getProductFail");

export const productReducer = createReducer(initialProductsState, (builder) => {
    builder
        .addCase(getProductRequest, (state) => {
            state.loading = true;
        })
        .addCase(getProductSuccess, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(getProductFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

const initialProductDetailState = {
    product: [],
};

const getProductDetailRequest = createAction("getProductDetailRequest");
const getProductDetailSuccess = createAction("getProductDetailSuccess");
const getProductDetailFail = createAction("getProductDetailFail");

export const productDetailReducer = createReducer(
    initialProductDetailState,
    (builder) => {
        builder
            .addCase(getProductDetailRequest, (state) => {
                state.loading = true;
            })
            .addCase(getProductDetailSuccess, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProductDetailFail, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
);
