import * as Yup from "yup";

export const createEventFirstPageSchema = Yup.object({
  eventTitle: Yup.string().min(5).max(70).required("Please enter event title"),
  category: Yup.string().required("Please select category"),
  venueType: Yup.string().required("Please select a venue type"),

  selectedPlace: Yup.object().when("venueType", {
    is: (value) => value === "venue",
    then: (schema) => schema.shape({}).required("Enter a valid venue"),
    otherwise: (schema) => schema.nullable(),
  }),

  meetingLink: Yup.string().when("venueType", {
    is: (value) => value === "online",
    then: (schema) => schema.required("Enter meeting link"),
    otherwise: (schema) => schema,
  }),

  eventDates: Yup.array()
    .of(Yup.date())
    .min(2, "Start and end dates are required")
    .max(2, "Start and end dates are required")
    .required("Event dates are required"),

  eventStartTime: Yup.string().required("Please select event start time"),
  eventEndTime: Yup.string().required("Please select event end time"),
});

export const createEventSecondPageSchema = Yup.object({
  coverImage: Yup.mixed()
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true; // Allow empty value
      return ["image/jpeg", "image/png"].includes(value.type);
    })
    .required("Cover image is required"),
  aboutEvent: Yup.string()
    .nonNullable("about")
    .required("Event about is required"),
  hasStarring: Yup.boolean(),

  starrings: Yup.array().when("hasStarring", {
    is: (value) => value === true,
    then: () =>
      Yup.array()
        .of(
          Yup.object().shape({
            id: Yup.number().required("Starring id is required"),
            starringPhoto: Yup.mixed()
              .test("fileType", "Invalid file type", (value) => {
                if (!value) return true; // Allow empty value
                return ["image/jpeg", "image/png"].includes(value.type);
              })
              .required("Starring image is required"),

            starringName: Yup.string().required("Starring name is required"),
          })
        )
        .required("Starring details are required"),
    otherwise: () => Yup.array(), // No validation when hasStarring is false
  }),
});

export const createEventThirdPageSchema = Yup.object({
  ticketType: Yup.string().required("Ticket type is required"),
  ticketName: Yup.string().required("Ticket name is required"),
  ticketPrice: Yup.number().when("ticketType", {
    is: (value) => value === "paid",
    then: (schema) => schema.required("Ticket price is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  ticketQuantity: Yup.number().required("Ticket quantity is required"),
  ticketSaleDates: Yup.array()
    .of(Yup.date())
    .min(2, "Start and end dates are required")
    .max(2, "Start and end dates are required")
    .required("Event dates are required"),
  saleStartTime: Yup.string().required("Please select event start time"),
  saleEndTime: Yup.string().required("Please select event end time"),
});

export const createEventFourthPageSchema = Yup.object({
  isPrivate: Yup.boolean(),
  visibilityOption: Yup.string(),
  accessPassword: Yup.string().when("visibilityOption", {
    is: (value) => value === "Password",
    then: (schema) => schema.required("Event access password is required"),
    otherwise: (schema) => schema,
  }),
});
