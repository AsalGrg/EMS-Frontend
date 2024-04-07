import api_urls from "../api_urls";

export default async function get_event_data(eventId){

    const api_url= api_urls.getAboutEvent(eventId);

    const token = "Bearer "+ localStorage.getItem('token')

    const res = await fetch(api_url, {
        method: "GET",
    
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: token
        },
      });
    
      return res;
}