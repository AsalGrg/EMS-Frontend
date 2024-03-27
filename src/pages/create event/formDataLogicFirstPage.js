import { format, parse } from "date-fns";
export default function formDataLogicFirstPage(formState) {
  const name = formState.eventTitle;
  const category = formState.category;
  const locationType = formState.venueType;

  let locationName;
  if (locationType === "venue") {
    locationName = formState.location;
  } else if (locationType === "online") {
    locationName = formState.location;
  } else {
    locationName = "";
  }

  const eventStartDate =
    formState.eventDates[0] != null
      ? format(formState.eventDates[0], "yyyy-MM-dd")
      : "";
  let eventStartTime = formState.eventStartTime;
  if (eventStartTime !== null) {
    const parsedStartTime = parse(
      formState.eventStartTime,
      "h:mm a",
      new Date()
    );
    eventStartTime = format(parsedStartTime, "HH:mm:ss");
  }
  const eventEndDate =
    formState.eventDates[1] != null
      ? format(formState.eventDates[1], "yyyy-MM-dd")
      : "";
  let eventEndTime = formState.eventEndTime;
  if (eventEndTime !== null) {
    const parsedEndTime = parse(formState.eventEndTime, "h:mm a", new Date());
    eventEndTime = format(parsedEndTime, "HH:mm:ss");
  }

  return {
    eventFirstPageDetails: {
      eventId: formState.eventId,
      eventName: name,
      eventCategory: category,
      locationType: locationType,
      locationName: locationName,
      eventId: formState.eventId,
      // aboutEvent: aboutEvent,
      // hasStarring: hasStarring,
      // isPrivate: isPrivate,
      // eventVisibilityType: eventVisibilityType,
      // eventAccessPassword: eventAccessPassword,
    },
    eventDateDetails: {
      eventStartDate: eventStartDate,
      eventStartTime: eventStartTime,
      eventEndDate: eventEndDate,
      eventEndTime: eventEndTime,
      displayStartTime: true,
    },

    eventPhysicalLocationDetails: {
      displayName: formState.selectedPlace.display_name,
      country: formState.selectedPlace.address.country,
      lat: formState.selectedPlace.lat,
      lon: formState.selectedPlace.lon,
    },
  };
}
