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
    ticketSalesEndDate: "",
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
        },
        addPromoCode :(state, action)=>{
          

          const payloadData = action.payload;
          const data ={
            promCodeName: payloadData.name,
            expiryDate: payloadData.expiryDate,
            hasNoEnd: payloadData.hasNoEnd,
            merit: payloadData.promoCodeType==="Cash discount"? "Rs "+payloadData.discount+" off": payloadData.discount+" % off",
            applicableFrom: payloadData.applicableOn,
            expiryDate: payloadData.expiryDate,
            active: true
          }
          state.promoCodeDetailsDtos.push(data)
        },
        handlePromoCodeActiveStatus: (state, action)=>{
          const {bool, promoId}= action.payload;

          state.promoCodeDetailsDtos.map(each=>{
            if(each.promoCodeId===promoId){
              each.active =bool
            }
          })
        }
    }
})


export const {updateEntireEventDesriptionState,addPromoCode,handlePromoCodeActiveStatus}= eventDescriptionSlice.actions;
export default eventDescriptionSlice.reducer;