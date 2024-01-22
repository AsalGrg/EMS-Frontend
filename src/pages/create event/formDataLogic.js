import { useSelector } from "react-redux";
import { convertTimeStringToBackendFormat } from "../../components/utilities/convertStringTimeToLocal";
import { format, parse } from "date-fns";

export const formDataLogic = (formState) => {
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

  const ticketType = formState.ticketType;
  const ticketName = formState.ticketName;
  const ticketQuantity = formState.ticketQuantity;
  const ticketPrice = formState.ticketType=="paid"? formState.ticketPrice: 0;
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
  var starrings = [];

  if (hasStarring) {
    formState.starrings.forEach((eachStarring) => {
      // starrings.push({
      //   starringPhoto: eachStarring.starringPhoto,
      //   starringName: eachStarring.starringName,
      // });
      const eachStarringFormData = new FormData();
      eachStarringFormData.append("starringPhoto", eachStarring.starringPhoto);
      eachStarringFormData.append("starringName", eachStarring.starringPhoto);

      starrings.push(eachStarringFormData);
    });
  } else {
    starrings = null;
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

  let starringImages = [];
  let starringNames = [];

  if (hasStarring) {
    formState.starrings.forEach((eachStarring) => {
      starringImages.push(eachStarring.starringPhoto);
      starringNames.push(eachStarring.starringName);
    });
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
    eventCoverImage: formState.coverImage,
    hasStarring: hasStarring,
    starringImages: starringImages,
    starringNames: starringNames,
  };
};
