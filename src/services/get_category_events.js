import api_urls from "./api_urls";

export default async function get_category_events(category, location) {
  const api_url = api_urls.getEventByCategory(category, location);

  const tokenLocal= localStorage.getItem("token");
  const token = tokenLocal?"Bearer " +tokenLocal: null; 

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
  });
  return res;
}
