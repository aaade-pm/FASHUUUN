import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./service/productData";
import { setupListeners } from "@reduxjs/toolkit/query";
import modalReducer from "./slices/modalSlice";
import categoryReducer from "./slices/categorySlice";
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    modal: modalReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
