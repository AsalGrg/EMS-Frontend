export default function getPlaces(searchText) {
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  const params = {
    q: searchText,
    format: "json",
    addressdetails: 1,
    polygon_geojson: 0,
  };
  const queryString = new URLSearchParams(params).toString();
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
    .then((response) => response.json()) // Parse response as JSON
    .then((result) => {
      console.log(result)
      return result;
    })
    .catch((err) => {
      console.log("err: ", err);
      return []; // Return an empty array in case of error
    });
}
