import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionId: 0,
  collectionName: "",
  collectionImage: "",
  collectionDescription: "",
  collectionEvents: [],
};

const collectionDescriptionSlice = createSlice({
    initialState,
    name: 'collectionDescription',
    reducers: {

        updateEntireCollectionDescriptionState: (state, action)=>{
            return action.payload;
        },
        removeEventFromCollection: (state, action)=>{

            const {eventId}= action.payload;

            state.collectionEvents= state.collectionEvents.filter(each=>(
                each.eventId!=eventId
            ))
        }
    }
})


export const{updateEntireCollectionDescriptionState, removeEventFromCollection}= collectionDescriptionSlice.actions;

export default collectionDescriptionSlice.reducer;