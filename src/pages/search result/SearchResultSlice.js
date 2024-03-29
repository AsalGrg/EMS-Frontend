import { createSlice } from "@reduxjs/toolkit";
// import { isThisWeek, isTomorrow } from "../../components/utilities/DateChecker";
import { isThisWeek, isToday, isTomorrow } from "date-fns";
import { filterCategoryEventsByDate } from "../category/CategorySlice";
import { filterEventsByDate } from "../../components/utilities/filterEventsByDate";
import filterEventsByTicketType from "../../components/utilities/filterEventsByTicketType";

const initialState = {
  data: [],
  filters: {
    followedVendors: false,
    date: null,
    ticketType: null,
    categoryType: null,
  },
  filteredData: [],
};

const searchEvent = createSlice({
  name: "searchEvent",
  initialState,
  reducers: {
    updateSearchEventState: (state, action) => {
      let { field, value } = action.payload;

      console.log("Sliceee: "+ value)
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

    applyFilters: (state, action) => {
      const dateFilterState= state.filters.date
      const followedVendorFilterState= state.filters.followedVendors
      const ticketTypeFilterState= state.filters.ticketType
      const categoryTypeFilterState= state.filters.categoryType

      // const dateFilterState= state.filters.date
      // const dateFilterState= state.filters.date

      var filteredData= state.data;

      console.log("Inside Slice")
      console.log("Inside Slice: "+ filteredData)

      if(dateFilterState){
        console.log("date filter state")
        filteredData= filterEventsByDate(filteredData, dateFilterState);
      }
      
      if(ticketTypeFilterState){
        filteredData= filterEventsByTicketType(filteredData, ticketTypeFilterState)
      }

      if(categoryTypeFilterState){
        filteredData= filteredData.filter(each=>(
          each.category===categoryTypeFilterState
        ))
      }


      state.filteredData = filteredData;

      console.log(state.filteredData)
    },
  },
});

export const {
  initializeSearchResultState,
  updateSearchEventState,
  updateFilters,
  clearAllFilters,
  applyFilters,
} = searchEvent.actions;
export default searchEvent.reducer;
