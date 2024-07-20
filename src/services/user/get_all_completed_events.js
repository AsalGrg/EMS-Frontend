import api_urls from "../api_urls";

export default async function get_all_completed_events(
    
){
    console.log("jjeje")
    const api_url = api_urls.getAllCompletedEvents();
    const token = "Bearer "+ localStorage.getItem('token')

    const res = await fetch(api_url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      }
    });
    return res;
}