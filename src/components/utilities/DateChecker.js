export function isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }
  
  export function isTomorrow(date) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return date.toDateString() === tomorrow.toDateString();
  }
  
  export function isThisWeekend(date) {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const isSaturday = dayOfWeek === 6;
    const isSunday = dayOfWeek === 0;
    const nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + (6 - dayOfWeek) + (isSunday ? 7 : 0));
    const nextSunday = new Date(nextSaturday);
    nextSunday.setDate(nextSunday.getDate() + 1);
    return date >= today && date <= nextSunday;
  }
  
  export function isThisWeek(date) {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
    endOfWeek.setHours(23, 59, 59, 999);
    return date >= startOfWeek && date <= endOfWeek;
  }
  
  export function isSameDay(date1, date2) {
    return date1.toDateString() === date2.toDateString();
  }
  