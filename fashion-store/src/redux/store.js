import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./service/productData";
import { setupListeners } from "@reduxjs/toolkit/query";
import modalReducer from "./slices/modalSlice";
import categoryReducer from "./slices/categorySlice";
import mobileNavReducer from "./slices/mobileNavSlice";
import addToCartReducer from "./slices/addToCartSlice";
import cartTriggerReducer from "./slices/cartTriggerSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    modal: modalReducer,
    category: categoryReducer,
    mobileNav: mobileNavReducer,
    addToCart: addToCartReducer,
    cartTrigger: cartTriggerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
