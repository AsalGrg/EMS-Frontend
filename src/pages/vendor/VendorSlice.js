import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    theme: "light",
    active: "home",
}

const vendorSlice = createSlice({
    initialState,
    name: "vendorSlice",
    reducers: {
        updateActive : (state, action)=>{
            state.active= action.payload;
        }
    }
})

export default vendorSlice.reducer;
export const {updateActive}= vendorSlice.actions;