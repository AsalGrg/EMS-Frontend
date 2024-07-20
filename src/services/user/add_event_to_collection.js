import api_urls from "../api_urls";

export default async function add_event_to_collection(collectionId, eventId) {

  const api_url = api_urls.addEventToCollection(eventId, collectionId);

  const token ="Bearer "+ localStorage.getItem("token")

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token
    }
  });
  return res;
}
