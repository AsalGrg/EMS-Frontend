import api_urls from "../api_urls";

export default async function get_edit_profile_details(
    
){
    const api_url = api_urls.getAllEditProfileDetails();
    const token = "Bearer "+ localStorage.getItem('token')

    const res = await fetch(api_url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      }
    });
    return res;
}