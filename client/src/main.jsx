import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/ContextProvider";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ContextProvider>
                    <App />
                </ContextProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
