import * as Yup from "yup";

export const createEventFirstPageSchema = Yup.object({
    eventTitle: Yup.string().min(5).max(70).required("Please enter event title"),
    category: Yup.string().required("Please select category"),
    location: Yup.string().required("Please select a location"),
    meetingLink: Yup.string().required("Please enter the meeting link"),
    eventStartTime: Yup.string().required("Please select event start time"),
    eventEndTime: Yup.string().required("Please select event end time"),
  });