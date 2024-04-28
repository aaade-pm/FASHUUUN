import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const isItemInCart = state.cart.some((item) => item.id === newItem.id);
      if (!isItemInCart) {
        state.cart = [...state.cart, newItem];
      }
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
