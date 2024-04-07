import api_urls from "../api_urls";

export default async function get_event_by_location(
    location
){

    console.log(location)
    const api_url = api_urls.getEventByPlace(location);
    const token = "Bearer "+ localStorage.getItem('token')

    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      }
    });
    return res;
}