import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventTitle: "",
  category: "x",

  venueType: "",
  location: "",
  meetingLink: "",

  eventDates: [null, null],
  eventStartTime: null,
  eventEndTime: null,
  displayStartTime: false,
  displayEndTime: false,

  coverImage: null,
  isAboutClicked: false,
  aboutEvent: '',
 
  hasStarring: false,

  starrings: [
    {
      id: 1,
      starringPhoto: "",
      starringName: "",
      starringRole: "",
    },
  ],
  ticketType: "",
  ticketName: "",
  ticketPrice: null,
  ticketQuantity: null,
  ticketSaleDates: [null, null],
  saleStartTime:null,
  saleEndTime: null,

  isPrivate: false,
  visibilityOption: "public" //can be of types: public, private with link, private with password
  ,
  accessPassword: null,

  matchedPlaces: null,
  selectedPlace: null,

  errors: null,
  touched: null
};

const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    updateCreateEventField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    addStarringInput: (state) => {
      state.starrings.push({
        id: Date.now(),
        starringPhoto: "",
        starringName: "",
        starringRole: ""
      });
    },
    changeStarringName: (state, action) => {
      const { id, changedName } = action.payload;

      // Use Immer to update the state in a mutable way
      const starringToChange = state.starrings.find((each) => each.id === id);
      if (starringToChange) {
        starringToChange.starringName = changedName;
      }
    },

    getStarringImageFile :(state, action)=>{
      const id= action.payload;
      const filteredStarring = state.starrings.filter((each) => each.id === id);
      return filteredStarring.starringPhoto;
    },

    changeStarringImage: (state, action) => {

      const { id, changedImage } = action.payload;

      // Use Immer to update the state in a mutable way
      const starringToChange = state.starrings.find((each) => each.id === id);
      if (starringToChange) {
        starringToChange.starringPhoto = changedImage;
      }
    },
    removeEachStarring: (state, action) => {
      state.starrings = state.starrings.filter(
        (each) => each.id !== action.payload
      );
    },

    removeStarringImage: (state, action)=>{
      const id = action.payload
      const starringToChange = state.starrings.find((each) => each.id === id);

      starringToChange.starringPhoto= ""
    },

    updateMatchedPlacesCreateEvent: (state, action)=>{
      const { matchedPlaces } = action.payload;
      state.matchedPlaces= matchedPlaces;
    }
  },


});

export const {
  updateCreateEventField,
  addStarringInput,
  removeEachStarring,
  removeStarringImage,
  changeStarringName,
  changeStarringImage,
  getStarringImageFile,
  updateMatchedPlacesCreateEvent
} = createEventSlice.actions;
export default createEventSlice.reducer;
