import { configureStore } from "@reduxjs/toolkit";
import createEventReducer from '../pages/create event/CreateEventSlice'

export const store= configureStore({
    reducer:{
        createEvent: createEventReducer
    }
})