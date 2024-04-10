import api_urls from "../api_urls";

export default async function get_all_collections(
    
){
    const api_url = api_urls.getAllCollections();

    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    });
    return res;
}