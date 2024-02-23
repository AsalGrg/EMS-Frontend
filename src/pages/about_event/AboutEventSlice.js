import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const aboutEventSlice = createSlice({
  initialState,
  name: "aboutEvent",
  reducers: {
    updateAboutEventField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateEntireStateAboutEvent: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateAboutEventField,updateEntireStateAboutEvent } = aboutEventSlice.actions;
export default aboutEventSlice.reducer;
