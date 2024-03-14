import { configureStore } from "@reduxjs/toolkit";
import createEventReducer from "../pages/create event/CreateEventSlice";
import categoryReducer from "../pages/category/CategorySlice";
import searchEventReducer from "../pages/search result/SearchResultSlice";
import searchBarReducer from "../pages/search/SearchBarSlice";
import aboutEventReducer from "../pages/about_event/AboutEventSlice";
import userProfileReducer from "../pages/user_profile/UserProfileSlice";
import vendorReducer from "../pages/vendor/VendorSlice";
export const store = configureStore({
  reducer: {
    createEvent: createEventReducer,
    category: categoryReducer,
    searchEvent: searchEventReducer,
    searchBar: searchBarReducer,
    aboutEvent: aboutEventReducer,
    userProfile: userProfileReducer,
    vendor: vendorReducer
  },
});
