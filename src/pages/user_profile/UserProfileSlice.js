import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "userSnippetDetails": {
      "userCoverImage": null,
      "userDp": "",
      "username": "",
      "userIntro": ""
  },
  "noOfEvents": 3,
  "pastEvents": [],
  "upcomingEvents": []
};

const userProfileSlice = createSlice({
  initialState,
  name: "userProfile",
  reducers: {
    updateEntireUserProfileState: (state, action) => {
      console.log("profile updated")
      return action.payload;
    },
  },
});

export const { updateEntireUserProfileState } = userProfileSlice.actions;
export default userProfileSlice.reducer;
