import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    quantity: 1,
  },
  reducers: {
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { setQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
