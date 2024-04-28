import { createSlice } from "@reduxjs/toolkit";

export const cartTriggerSlice = createSlice({
  name: "cartTrigger",
  initialState: {
    cartTrigger: false,
  },
  reducers: {
    triggerCart: (state) => {
      state.cartTrigger = !state.cartTrigger;
    },
  },
});

export const { triggerCart } = cartTriggerSlice.actions;

export default cartTriggerSlice.reducer;
