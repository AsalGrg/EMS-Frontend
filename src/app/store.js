import { configureStore } from "@reduxjs/toolkit";
import createEventReducer from "../pages/create event/CreateEventSlice";
import categoryReducer from "../pages/category/CategorySlice";
import searchEventReducer from "../pages/search result/SearchResultSlice";
import searchBarReducer from "../pages/search/SearchBarSlice";
import aboutEventReducer from "../pages/about_event/AboutEventSlice";
import userProfileReducer from "../pages/user_profile/UserProfileSlice";
import vendorsReducer from "../components/global/VendorSnippetsSlice";
import eventDescriptionReducer from "../pages/vendor/event_description/EventDescriptionSlice";
export const store = configureStore({
  reducer: {
    createEvent: createEventReducer,
    category: categoryReducer,
    searchEvent: searchEventReducer,
    searchBar: searchBarReducer,
    aboutEvent: aboutEventReducer,
    userProfile: userProfileReducer,
    vendors: vendorsReducer,
    eventDescription: eventDescriptionReducer
  },
});
