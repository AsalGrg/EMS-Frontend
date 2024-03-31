import { createSlice } from "@reduxjs/toolkit"
import { eachDayOfInterval } from "date-fns"

const initialState= {
    vendors:[]
}

const vendorsSlice = createSlice({
    name: "vendors",
    initialState,
    reducers:{
        
        updateEntireVendorList: (state, action)=>{

            console.log("vendors slice")
            console.log(action.payload)
            //expecting list of vendors in payload
            state.vendors= action.payload
        },

        followVendorState:(state, action)=>{
            state.vendors.map(each=>{

                //expecting vendor id in the payload
                if(each.vendorId===action.payload){
                    each.vendorFollowers= each.vendorFollowers+1
                    each.hasFollowed= true
                }
            })
        },
        unfollowVendorState:(state, action)=>{
            state.vendors.map(each=>{

                //expecting vendor id in the payload
                if(each.vendorId===action.payload){
                    each.vendorFollowers= each.vendorFollowers-1
                    each.hasFollowed= false
                }
            })
        }
    }
})

export const {updateEntireVendorList, followVendorState, unfollowVendorState}= vendorsSlice.actions;
export default vendorsSlice.reducer;