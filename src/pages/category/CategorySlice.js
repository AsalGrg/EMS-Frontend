import { createSlice } from "@reduxjs/toolkit"

const initialState={
    data: null,
    loading: null,
    error: null,
}

const categorySlice= createSlice({
    name: "category",
    initialState,
    reducers:{

        dataFetchSuccess: (state, action)=>{
            state.data= action.payload
        }
    }
})


export const {dataFetchSuccess} = categorySlice.actions
export default categorySlice.reducer;