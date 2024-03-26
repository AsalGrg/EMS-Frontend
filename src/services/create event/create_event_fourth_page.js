import api_urls from "../api_urls";

export default async function create_event_fourth_page(
    formData,
    api_url
){

    const form = new FormData();

    form.append(
      "eventFourthPageDetails",
      new Blob([JSON.stringify(formData.eventFourthPageDetails)], {
        type: "application/json",
      })
    );
 

    const token = "Bearer "+ localStorage.getItem("token")

    const res = await fetch(api_url, {
      method: "POST",
      
      headers: {
        Authorization : token,
        "Access-Control-Allow-Origin": "*",
      },
      body: form,
    });
  
    return res;
} 