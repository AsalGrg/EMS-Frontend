import { createSlice } from "@reduxjs/toolkit"

const initialState={
    collections: [],
}

const collectionSlice= createSlice({
     name: 'collection',
     initialState,
     reducers: {
        updateEntireCollectionsState: (state, action)=>{
            //expecting a list of collections
            state.collections= action.payload; 
        },
        
        addCollection:(state, action)=> {
            //expecting a object of added collection in Payload
            state.collections.push(action.payload)
        }
     }
})

export const {updateEntireCollectionsState, addCollection} = collectionSlice.actions;
export default collectionSlice.reducer;