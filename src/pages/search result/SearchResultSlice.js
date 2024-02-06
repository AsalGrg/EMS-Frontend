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
  },
});

export const { updateSearchEventState, updateFilters } = searchEvent.actions;
export default searchEvent.reducer;
