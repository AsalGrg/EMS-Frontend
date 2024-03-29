import {
  isToday,
  isTomorrow,
  startOfWeek,
  endOfWeek,
  isThisWeek,
} from "date-fns";

export function filterEventsByDate(events, date) {
  if (date === "Today") {
    events = events.filter((eachData) => {
      return isToday(eachData.startDate);
    });
  }

  if (date === "Tomorrow") {
    events = events.filter((eachData) => {
        console.log("fromm toooo")
      return isTomorrow(eachData.startDate);
    });
  }

  if (date === "This weekend") {
    events = events.filter((eachData) => {
      return isThisWeekend(eachData.startDate);
    });
  }

  if (date === "This week") {
    events = events.filter((eachData) => {
      return isThisWeek(eachData.startDate);
    });
  }


  if (date instanceof Date) {
    events = events.filter((eachData) => {
      // Compare year, month, and day of eachData.startDate and date
      const startDate = new Date(eachData.startDate);
      return (
        startDate.getFullYear() === date.getFullYear() &&
        startDate.getMonth() === date.getMonth() &&
        startDate.getDate() === date.getDate()
      );
    });
  }

  return events;
}

function isThisWeekend(date) {
  const startOfCurrentWeekend = startOfWeek(new Date(), { weekStartsOn: 6 }); // Saturday
  const endOfCurrentWeekend = endOfWeek(new Date(), { weekStartsOn: 6 }); // Sunday
  return date >= startOfCurrentWeekend && date <= endOfCurrentWeekend;
}
