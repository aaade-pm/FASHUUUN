import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    cart: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
