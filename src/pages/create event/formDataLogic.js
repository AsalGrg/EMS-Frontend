import { useSelector } from "react-redux";
import { convertTimeStringToBackendFormat } from "../../components/utilities/convertStringTimeToLocal";
import { format, parse } from "date-fns";

export const formDataLogic = (formState) => {
  const name = formState.eventTitle;
  const category = "Music";
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

  const ticketType = formState.ticketType;
  const ticketName = formState.ticketName;
  const ticketQuantity = formState.ticketQuantity;
  const ticketPrice =
    formState.ticketType == "paid" ? formState.ticketPrice : 0;
  const saleStartDate =
    formState.ticketSaleDates[0] != null
      ? format(formState.ticketSaleDates[0], "yyyy-MM-dd")
      : "";
  let saleStartTime = formState.saleStartTime;
  if (saleStartTime !== null) {
    const parsedEndTime = parse(formState.saleStartTime, "h:mm a", new Date());
    saleStartTime = format(parsedEndTime, "HH:mm:ss");
  } else {
    saleStartTime = "";
  }
  const saleEndDate =
    formState.ticketSaleDates[1] != null
      ? format(formState.ticketSaleDates[1], "yyyy-MM-dd")
      : "";

  let saleEndTime = formState.saleEndTime;
  if (saleEndTime !== null) {
    const parsedEndTime = parse(formState.saleEndTime, "h:mm a", new Date());
    saleEndTime = format(parsedEndTime, "HH:mm:ss");
  } else {
    saleStartTime = "";
  }

  const aboutEvent = formState.aboutEvent;

  const hasStarring = formState.hasStarring;

  var starrings = null;

  if (hasStarring) {
    starrings = formState.starrings;
  }

  const isPrivate = formState.isPrivate;
  let eventVisibilityType;
  if (!isPrivate) {
    eventVisibilityType = "Public";
  } else {
    eventVisibilityType = formState.visibilityOption;
  }

  let eventAccessPassword;
  if (eventVisibilityType !== "Link") {
    eventAccessPassword = "";
  } else {
    eventAccessPassword = formState.accessPassword;
  }

  return {
    eventDetails: {
      eventName: name,
      eventCategory: category,
      locationType: locationType,
      locationName: locationName,
      aboutEvent: aboutEvent,
      hasStarring: hasStarring,
      isPrivate: isPrivate,
      eventVisibilityType: eventVisibilityType,
      eventAccessPassword: eventAccessPassword,
    },

    eventDateDetails: {
      eventStartDate: eventStartDate,
      eventStartTime: eventStartTime,
      eventEndDate: eventEndDate,
      eventEndTime: eventEndTime,
      displayStartTime: true,
    },

    eventTicketDetails: {
      ticketType: ticketType,
      ticketName: ticketName,
      ticketQuantity: ticketQuantity,
      ticketPrice: ticketPrice,
      saleStartDate: saleStartDate,
      saleStartTime: saleStartTime,
      saleEndDate: saleEndDate,
      saleEndTime: saleEndTime,
    },

    eventPhysicalLocationDetails: {
      displayName: formState.selectedPlace.display_name,
      country: formState.selectedPlace.address.country,
      lat: formState.selectedPlace.lat,
      lon: formState.selectedPlace.lon,
    },
    eventCoverImage: formState.coverImage,
    hasStarring: hasStarring,
    starrings: starrings,
  };
};
