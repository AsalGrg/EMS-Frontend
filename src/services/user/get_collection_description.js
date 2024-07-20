import api_urls from "../api_urls";

export default async function get_collection_description(
    collectionId
){

    const api_url = api_urls.getCollectionDescription(collectionId);
    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    });
    return res;
}