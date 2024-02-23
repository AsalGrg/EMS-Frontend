import api_urls from "../api_urls";

export default async function search_event(eventTitle, location) {
  const api_url = api_urls.searchEvent(eventTitle, location);

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  });
  return res;
}
