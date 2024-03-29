import api_urls from "./api_urls";

export default async function get_category_events(category, location) {
  const api_url = api_urls.getEventByCategory(category, location);

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res;
}
