import { createSlice } from "@reduxjs/toolkit";

export const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState: {
    mobileNavOpen: false,
  },
  reducers: {
    openMobileNav: (state) => {
      state.mobileNavOpen = true;
    },
    closeMobileNav: (state) => {
      state.mobileNavOpen = false;
    },
  },
});

export const { openMobileNav, closeMobileNav } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;
