import axios from "axios";
import * as actionTypes from "../constants/productConstants.js";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
});

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_REQUEST,
        });
        const { data } = await axiosInstance.get("/api/products");

        dispatch({
            type: actionTypes.GET_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: data.message });
    }
};

export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_BY_ID_REQUEST,
        });
        const { data } = await axiosInstance.get(`/api/product/${id}`);
        dispatch({
            type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_BY_ID_FAIL,
            payload: data.message,
        });
    }
};
