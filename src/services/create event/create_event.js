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
    var starringDetails = {};

    for (var i = 0; i < formData.starrings.length; i++) {
      starringDetails["starring" + (i + 1) + "Name"] =
        formData.starrings[i].starringName;
      starringDetails["starring" + (i + 1) + "Role"] =
        formData.starrings[i].starringRole;

      form.append(`starring${i + 1}Photo`, formData.starrings[i].starringPhoto);
    }

    form.append(
      "eventStarringDetails",
      new Blob([JSON.stringify(starringDetails)], {
        type: "application/json",
      })
    );
  }

  if(formData.eventDetails.locationType=="venue"){
    form.append(
      "eventPhysicalLocationDetails",
      new Blob([JSON.stringify(formData.eventPhysicalLocationDetails)], {
        type: "application/json",
      })
    );
  }

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
