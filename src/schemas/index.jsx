import * as Yup from "yup";

export const createEventFirstPageSchema = Yup.object({
  eventTitle: Yup.string().min(5).max(70).required("Please enter event title"),
  category: Yup.string().required("Please select category"),
  venueType: Yup.string().required("Please select a venue type"),
  location: Yup.object().when("venueType", {
    is: (venueType) => venueType !== "online",
    then: Yup.object().required("Location is required"),
  }),
  meetingLink: Yup.string().when("venueType", {
    is: (venueType) => venueType !== "venue",
    then: Yup.string().required("Meeting link is required"),
  }),
  selectedPlace: Yup.object().required("Please select a valid place"),
  eventStartTime: Yup.string().required("Please select event start time"),
  eventEndTime: Yup.string().required("Please select event end time"),
});
