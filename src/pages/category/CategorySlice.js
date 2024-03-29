import { createSlice } from "@reduxjs/toolkit"
import { filterEventsByDate } from "../../components/utilities/filterEventsByDate";

const initialState={
    events: [],
    vendors: [],
    filteredEvents: []
}

const categorySlice= createSlice({
    name: "category",
    initialState,
    reducers:{

        dataFetchSuccess: (state, action)=>{
            state.data= action.payload
        },
        updateEntireCategoryState: (state, action)=>{

            state.events= action.payload.data.categoryEvents;
            state.vendors= action.payload.data.categoryVendors;
            state.filteredEvents= action.payload.data.categoryEvents;
        }
        ,
        filterCategoryEventsByDate: (state, action)=>{
            //expecting date in payload
            const filtedEvents= filterEventsByDate(state.events, action.payload)

            console.log(filtedEvents)
            state.filteredEvents= filtedEvents;
        },

        undoCategoryEventsDateFilter:(state, action)=>{
            state.filteredEvents= state.events;
        }
    }
})


export const {dataFetchSuccess, updateEntireCategoryState, filterCategoryEventsByDate,undoCategoryEventsDateFilter} = categorySlice.actions
export default categorySlice.reducer;