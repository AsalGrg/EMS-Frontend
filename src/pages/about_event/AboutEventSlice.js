import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // eventAccessType: "", //can be preview or about
  // coverImage: "",
  // eventDates: "",
  // eventTitle: "",
  // locationType: "",
  // physicalLocationDetails: {
  //   lat: "",
  //   lon: "",
  //   display_name: "",
  // },
  // ticketDetails: {
  //   ticketType: "",
  //   ticketName: "",
  //   ticketPrice: "",
  //   ticketBookedQuantity: "",
  // },
  // aboutEvent: "",
  // starrings: [],
  // organizerDetails: {
  //   profilePicture: null,
  //   organizerName: "",
  //   followers: "",
  // },
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
      console.log("here")
      state = action.payload;
    },
  },
});

export const { updateAboutEventField,updateEntireStateAboutEvent } = aboutEventSlice.actions;
export default aboutEventSlice.reducer;
