import api_urls from "../api_urls";

export default async function remove_event_from_collection(
    eventId, collectionId
){


    const api_url = api_urls.removeEventFromCollection(eventId, collectionId);
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