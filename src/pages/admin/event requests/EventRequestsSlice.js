import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    requests:[]
}

const eventRequestsSlice = createSlice({
    name: 'eventRequests',
    initialState,
    reducers: {
        updateRequests: (state, action)=>{
            state.requests= action.payload;
        },

        acceptRequest: (state, action)=>{
            state.requests.map(each=>{
                if(each.eventId=== action.payload){
                    each.eventStatus='completed'
                }
            })
        }
        ,

        declineRequest: (state, action)=>{
            state.requests.map(each=>{
                if(each.eventId=== action.payload){
                    each.eventStatus='rejected'
                }
            })
        }
    }
})

export const{updateRequests, acceptRequest, declineRequest}= eventRequestsSlice.actions;

export default eventRequestsSlice.reducer;