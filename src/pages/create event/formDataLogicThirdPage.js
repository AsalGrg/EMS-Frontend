import { format, parse } from "date-fns";

export default function formDataLogicThirdPage(formState) {
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

  return {
    eventTicketDetails: {
      eventId: formState.eventId,
      ticketType: ticketType,
      ticketName: ticketName,
      ticketQuantity: ticketQuantity,
      ticketPrice: ticketPrice,
      saleStartDate: saleStartDate,
      saleStartTime: saleStartTime,
      saleEndDate: saleEndDate,
      saleEndTime: saleEndTime,
    },
  };
}
