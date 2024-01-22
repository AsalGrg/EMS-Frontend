import React from "react";
import api_urls from "../api_urls";

export default async function create_event(formData) {
  // const api_url = api_urls.createEvent();
  const api_url = api_urls.createEvent();

  console.log(formData.hasStarring);

  const form = new FormData();
  form.append("eventCoverImage", formData.eventCoverImage);
  form.append(
    "eventDetails",
    new Blob([JSON.stringify(formData.eventDetails)], {
      type: "application/json",
    })
  );
  form.append(
    "eventDateDetails",
    new Blob([JSON.stringify(formData.eventDateDetails)], {
      type: "application/json",
    })
  );
  form.append(
    "eventTicketDetails",
    new Blob([JSON.stringify(formData.eventTicketDetails)], {
      type: "application/json",
    })
  );

  if (formData.hasStarring) {
    // formData.starrings.forEach((eachStarring,index) => {
    //     form.append(`starringNames[${index}]`, eachStarring.starringName);
    //     form.append(`starringImages[${index}]`, eachStarring.starringPhoto);
    //     console.log("in")
    // });

    form.append(
      "starringNames",
      new Blob([JSON.stringify(formData.starringNames)], {
        type: "application/json",
      })
    );
    form.append("starringImages", formData.starringImages);
  }

  console.log(form.get("starringNames"));

  const res = await fetch(api_url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },

    body: form,
  });

  console.log("Yeta chu");
  return res;
}
