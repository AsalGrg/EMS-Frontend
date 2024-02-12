import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  searchedEvent: null,
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

    updateSearchBarState: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateMatchedPlaces, updateSearchBarState } = searchBar.actions;
export default searchBar.reducer;
