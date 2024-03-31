import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "aboutEvent": null,
  "coverImage": null,
  "eventStartDate": new Date(),
  "eventEndDate": new Date(),
  "eventStartTime": "1:00",
  "eventEndTime": "2:00",
  "eventTitle": null,
  "hasStarring": false,
  "locationType": false,
  "physicalLocationDetails":null,
  "starrings": [],
  "ticketDetails": {
      "ticketBookedQuantity": 0,
      "ticketName": null,
      "ticketPrice": null,
      "ticketType": null
  },
  "vendorDetails": {
      "vendorId": 1,
      "vendorName": null,
      "vendorProfile":null,
      "vendorFollowers": 0,
      "hasFollowed": false
  }
};

const aboutEventSlice = createSlice({
  initialState,
  name: "aboutEvent",
  reducers: {
    updateAboutEventField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateEntireStateAboutEvent: (state, action) => {
      console.log("updated")
      return action.payload;
    },
    followVendorStateAboutEvent: (state, action) => {

      state.vendorDetails.vendorFollowers +=1
      state.vendorDetails.hasFollowed= true;
    },
    unfollowVendorStateAboutEvent: (state, action) => {
      state.vendorDetails.vendorFollowers -=1
      state.vendorDetails.hasFollowed= false;
    },
  },

});

export const {
  updateAboutEventField,
  updateEntireStateAboutEvent,
  followVendorStateAboutEvent,
  unfollowVendorStateAboutEvent,
} = aboutEventSlice.actions;
export default aboutEventSlice.reducer;
