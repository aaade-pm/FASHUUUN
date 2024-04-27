import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./service/productData";
import { setupListeners } from "@reduxjs/toolkit/query";
import modalReducer from "./slices/modalSlice";
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
