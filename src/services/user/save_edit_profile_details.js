import api_urls from "../api_urls";

export default async function save_edit_profile_details(
    profilePic, editProfileDetails
){

    const form = new FormData();

    if(profilePic!==null && profilePic instanceof File){
        form.append('userDp', profilePic)
    }

    
  form.append(
    "editProfileDetails",
    new Blob([JSON.stringify(editProfileDetails)], {
      type: "application/json",
    })
  );


    const api_url = api_urls.saveEditProfileDetails();
    const token = "Bearer "+ localStorage.getItem('token')

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