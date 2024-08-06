import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Slice/ProductsSlice";
import { createLogger } from "redux-logger";
import CardReducer from "../Slice/CardSlice";
const logger = createLogger()
const store = configureStore({
    reducer: {
        product: ProductsReducer,
        card: CardReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store