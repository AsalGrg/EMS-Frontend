import { createSlice } from "@reduxjs/toolkit"


const initialState={
    searchedEvent: "",
    searchedLocation: ""
}


const searchEvent = createSlice({
    name:"searchEvent",
    initialState,
    reducers:{

        updateSearchEventState: (state, action)=>{
            let {field, value}= action.payload;
            state[field]= value;
        }
    }
})

export const {updateSearchEventState}= searchEvent.actions
export default searchEvent.reducer;