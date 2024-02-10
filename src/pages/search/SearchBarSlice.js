import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchedPlaces: [],
  selectedPlaces: null,
};

const searchBar = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    updateMatchedPlaces: (state, action) => {
      const { matchedPlaces } = action.payload;
      state.matchedPlaces = matchedPlaces;
    },
  },
});

export const { updateMatchedPlaces } = searchBar.actions;
export default searchBar.reducer;
