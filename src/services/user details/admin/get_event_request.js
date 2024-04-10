import api_urls from "../../api_urls";

export async function get_event_requests() {
  const api_url = api_urls.getAllEventRequests();
  const token = "Bearer " + localStorage.getItem("token");

  const res = await fetch(api_url,  {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  return res;
}
