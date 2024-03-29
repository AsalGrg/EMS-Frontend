import axios from "axios";

export function getCurrentLocation(callback) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          );
          const { address } = response.data;
          callback(null, address);
        } catch (error) {
          console.error("Error fetching address:", error);
          callback(error, null);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        callback(error, null);
      }
    );
  } else {
    console.error("Geolocation not supported");
    callback(new Error("Geolocation not supported"), null);
  }
}
