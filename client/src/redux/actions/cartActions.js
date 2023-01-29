import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
});

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.ADD_TO_CART_REQUEST,
        });
        const { data } = await axiosInstance.get(`/api/product/${id}`);

        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: { ...data, quantity },
        });
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_TO_CART_FAIL,
            payload: error.message,
        });
    }
};

export const removeFromCart = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            payload: id,
        });
    } catch (error) {
        console.log("Error while calling cart API", error.message);
    }
};
