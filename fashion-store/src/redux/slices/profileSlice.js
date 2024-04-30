import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    profileOpen: false,
  },
  reducers: {
    profileTrigger: (state) => {
      state.profileOpen = !state.profileOpen;
    },
  },
});

export const { profileTrigger } = userProfileSlice.actions;
export default userProfileSlice.reducer;
