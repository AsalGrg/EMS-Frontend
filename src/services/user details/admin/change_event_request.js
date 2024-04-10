import api_urls from "../../api_urls";

export async function change_event_request(eventId, action) {
  const api_url = api_urls.updateEventRequest(eventId, action);
  const token = "Bearer " + localStorage.getItem("token");

  const res = await fetch(api_url,  {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  return res;
}
