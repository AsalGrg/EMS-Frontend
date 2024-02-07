import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  filters: {
    followedVendors: false,
    date: null,
    ticketType: null,
    categoryType: null,
  },
  filteredData: null,
};

const searchEvent = createSlice({
  name: "searchEvent",
  initialState,
  reducers: {
    updateSearchEventState: (state, action) => {
      let { field, value } = action.payload;
      state[field] = value;
    },
    updateFilters: (state, action) => {
      let { field, value } = action.payload;

      state.filters[field] = value;
    },

    clearAllFilters: (state, action) => {
      //changing to initial state

      state.filters = {
        followedVendors: false,
        date: null,
        ticketType: null,
        categoryType: null,
      };
    },
  },
});

export const { updateSearchEventState, updateFilters,clearAllFilters } = searchEvent.actions;
export default searchEvent.reducer;
