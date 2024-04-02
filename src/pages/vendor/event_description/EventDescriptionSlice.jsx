import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventBasicDetails: {
    eventId: null,
    pageStatus: null,
    eventStatus: "",
    eventCoverImgUrl:
      "",
    eventName: "",
    startDate: "",
    endDate: "",
    startTime: "",
    category: "",
    location_display_name:
      "",
    lat: 0.0,
    lon: 0.0,
    country: "",
    ticketType: "",
    ticketPrice: 0.0,
    ticketsForSale: 0,
    ticketsSold: 0,
    organizerName: "",
  },
  promoCodeDetailsDtos: [],
  eventOrders: [],
};


const eventDescriptionSlice = createSlice({
    name: "eventDescription",
    initialState,
    reducers: {
        updateEntireEventDesriptionState : (state, action)=> {
            return action.payload;
        }
    }
})


export const {updateEntireEventDesriptionState}= eventDescriptionSlice.actions;
export default eventDescriptionSlice.reducer;