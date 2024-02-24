import { createSlice } from "@reduxjs/toolkit";
// import { isThisWeek, isTomorrow } from "../../components/utilities/DateChecker";
import { isThisWeek, isToday, isTomorrow } from "date-fns";

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

    applyFilters: (state, action) => {
      const dateFilterState= state.filters.date
      // const dateFilterState= state.filters.date
      // const dateFilterState= state.filters.date
      // const dateFilterState= state.filters.date

      var filteredData= state.data;

      if(dateFilterState){
        if(dateFilterState=="today"){
          filteredData= filteredData.filter(eachData=> {
            return isToday(eachData.startDate)
          })

          console.log("today here")
          console.log(filteredData)
        }

        if(dateFilterState=="tommorow"){
          filteredData= state.data.filter(eachData=> {
            return isTomorrow(eachData.startDate)
          })
        }

        if(dateFilterState=="this weekend"){
          filteredData= state.data.filter(eachData=> {
            return isThisWeek(eachData.startDate)
          })
        }
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
