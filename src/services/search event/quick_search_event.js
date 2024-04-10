import api_urls from "../api_urls";

export default async function quick_search_event(eventTitle) {
  const api_url = api_urls.quickSearchEvent(eventTitle);

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  });
  return res;
}
