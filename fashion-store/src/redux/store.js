import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./service/productData";
import { setupListeners } from "@reduxjs/toolkit/query";
import modalReducer from "./slices/modalSlice";
import categoryReducer from "./slices/categorySlice";
import mobileNavReducer from "./slices/mobileNavSlice";
import addToCartReducer from "./slices/addToCartSlice";
import cartTriggerReducer from "./slices/cartTriggerSlice";
import userReducer from "./slices/userSlice";
import userProfileReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    modal: modalReducer,
    category: categoryReducer,
    mobileNav: mobileNavReducer,
    addToCart: addToCartReducer,
    cartTrigger: cartTriggerReducer,
    user: userReducer,
    userProfile: userProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
