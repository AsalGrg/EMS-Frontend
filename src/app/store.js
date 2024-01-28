import { configureStore } from "@reduxjs/toolkit";
import createEventReducer from '../pages/create event/CreateEventSlice'
import categoryReducer from '../pages/category/CategorySlice'

export const store= configureStore({
    reducer:{
        createEvent: createEventReducer,
        category: categoryReducer
    }
})