import api_urls from "../api_urls";

export default async function create_event_first(firstPageFormData){

    const api_url = api_urls.createEventFirstPage();

    const form = new FormData();

    if(firstPageFormData.eventId !=null){
      form.append("eventId", firstPageFormData.eventId)
    }

    form.append(
      "eventFirstPageDetails",
      new Blob([JSON.stringify(firstPageFormData.eventFirstPageDetails)], {
        type: "application/json",
      })
    );
    form.append(
      "eventDateDetails",
      new Blob([JSON.stringify(firstPageFormData.eventDateDetails)], {
        type: "application/json",
      })
    );
 
  
    if(firstPageFormData.eventFirstPageDetails.locationType=="venue"){
      form.append(
        "eventPhysicalLocationDetails",
        new Blob([JSON.stringify(firstPageFormData.eventPhysicalLocationDetails)], {
          type: "application/json",
        })
      );
    }
  

    console.log(firstPageFormData.eventDateDetails)

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