import { createSlice } from "@reduxjs/toolkit";

export const categoryTriggerSlice = createSlice({
  name: "categoryTrigger",
  initialState: {
    categoryTrigger: false,
  },
  reducers: {
    setCategoryTrigger: (state, action) => {
      state.categoryTrigger = action.payload;
    },
  },
});

export const { setCategoryTrigger } = categoryTriggerSlice.actions;
export default categoryTriggerSlice.reducer;
