import axios from "axios";
import api_urls from "../api_urls"

export async function get_user_details(){

    const api_url= api_urls.getUserProfile();
    const token = "Bearer "+ localStorage.getItem("token")

    const res= await axios.get(api_url, {
        headers: {
            Authorization : token
        }
    })
    
    return res;
}