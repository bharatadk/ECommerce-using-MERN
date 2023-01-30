import {
    productReducer,
    productDetailReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";

const rootReducer = combineReducers({
    getProducts: productReducer,
    getProductDetail: productDetailReducer,
    cart: cartReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
