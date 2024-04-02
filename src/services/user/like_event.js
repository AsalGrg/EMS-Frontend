import api_urls from "../api_urls";

export default async function like_event(
    eventId
){


    const api_url = api_urls.likeEvent(eventId);

    const token = "Bearer " + localStorage.getItem("token");

    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: token
      }
    });
    return res;
}