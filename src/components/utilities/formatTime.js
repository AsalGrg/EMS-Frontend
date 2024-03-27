export default function formatTime(inputTime) {
    const timeParts = inputTime.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    
    return formattedTime;
  }