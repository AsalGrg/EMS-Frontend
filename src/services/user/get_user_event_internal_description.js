import api_urls from "../api_urls";

export default async function get_user_event_internal_description(eventId) {
  const api_url = api_urls.getVendorEventInternalDetails(eventId);

  const token = "Bearer " + localStorage.getItem("token");

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
  });
  return res;
}
