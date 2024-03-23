import api_urls from "../api_urls";

export default async function create_event_second_page(formData) {
  const api_url = api_urls.createEventSecondPage();

  const form = new FormData();

  form.append("eventCoverImage", formData.eventCoverImage);

  form.append(
    "eventSecondPageDetails",
    new Blob([JSON.stringify(formData.eventSecondPageDetails)], {
      type: "application/json",
    })
  );


  if (formData.eventSecondPageDetails.hasStarring) {
    var starringDetails = {};

    for (var i = 0; i < formData.starrings.length; i++) {
      starringDetails["starring" + (i + 1) + "Name"] =
        formData.starrings[i].starringName;
      //   starringDetails["starring" + (i + 1) + "Role"] =
      //     formData.starrings[i].starringRole;

      console.log(formData.starrings[i].starringPhoto);
      form.append(`starring${i + 1}Photo`, formData.starrings[i].starringPhoto);
    }

    form.append(
      "eventStarringDetails",
      new Blob([JSON.stringify(starringDetails)], {
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

  return res;
}
