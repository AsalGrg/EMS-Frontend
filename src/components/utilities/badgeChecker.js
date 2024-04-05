export function checkIfDateIsAfterAWeek(eventDate){
    const today = new Date();
    const oneWeekFromToday = new Date();
    oneWeekFromToday.setDate(oneWeekFromToday.getDate() + 7);

    // Convert eventDate to a Date object
    const eventDateTime = new Date(eventDate);

    // Calculate the absolute difference in milliseconds
    const differenceInMilliseconds = Math.abs(eventDateTime.getTime() - today.getTime());

    // Convert the difference from milliseconds to days
    const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

    // Check if the difference is less than or equal to 7 days
    return differenceInDays <= 7;
}

export function checkIfDateIsBeforeAWeek(eventDate){
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    // Convert givenDate to a Date object
    const givenDateTime = new Date(givenDate);

    // Calculate the absolute difference in milliseconds
    const differenceInMilliseconds = Math.abs(today.getTime() - givenDateTime.getTime());

    // Convert the difference from milliseconds to days
    const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

    // Check if the difference is less than or equal to 7 days
    return differenceInDays <= 7;
}