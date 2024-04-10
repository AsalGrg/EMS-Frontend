import api_urls from "../api_urls";

export default async function get_event_data(eventId, accessPassword) {
  const api_url = api_urls.getAboutEvent(eventId);

  const token = "Bearer " + localStorage.getItem("token");

  const form = new FormData();
  if (accessPassword != undefined && accessPassword.length >0) {
    
    console.log("heeeee")
    const accessDetails={
        accessPassword: accessPassword
    }
    form.append(
      "eventAccessDetails",
      new Blob([JSON.stringify(accessDetails)], {
        type: "application/json",
      })
    );
  }

  const res = await fetch(api_url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
    body: form
  });

  return res;
}
