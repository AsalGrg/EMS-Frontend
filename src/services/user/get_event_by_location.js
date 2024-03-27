import api_urls from "../api_urls";

export default async function get_event_by_location(
    location
){

    console.log(location)
    const api_url = api_urls.getEventByPlace(location);

    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    });
    return res;
}