import axios from "axios";
import api_urls from "../api_urls";

export async function get_user_details() {
  const api_url = api_urls.getUserProfile();
  const token = "Bearer " + localStorage.getItem("token");

  const res = await axios.get(api_url, {
    headers: {
      Authorization: token,
    },
  });

  return res;
}

export async function get_user_details_by_userId(userId) {
  const api_url = api_urls.getUserProfileDetails(userId);

  const token = "Bearer " + localStorage.getItem("token");

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
  });
  return res;

}
