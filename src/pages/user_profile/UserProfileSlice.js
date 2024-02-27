import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userProfileSlice = createSlice({
  initialState,
  name: "userProfile",
  reducers: {
    updateEntireUserProfileState: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateEntireUserProfileState } = userProfileSlice.actions;
export default userProfileSlice.reducer;
