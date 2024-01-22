export function convertTimeStringToBackendFormat(timeString) {
    const [time, meridiem] = timeString.split(" ");

    let [hours, minutes] = time.split(":").map(Number);

    // Convert to 24-hour format if necessary
    if (meridiem === "PM" && hours !== 12) {
        hours += 12;
    } else if (meridiem === "AM" && hours === 12) {
        hours = 0;
    }

    // Ensure hours and minutes are always 2 digits
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');

    return `${hours}:${minutes}`;
}