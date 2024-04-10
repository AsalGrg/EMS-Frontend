import api_urls from "../../api_urls";

export default async function add_collection(categoryDetails, coverImage) {
  const api_url = api_urls.addCollection();

  const token = "Bearer " + localStorage.getItem("token");

  const form = new FormData();

  form.append('collectionCoverImg', coverImage)

  form.append(
    "eventCollectionDetails",
    new Blob([JSON.stringify(categoryDetails)], {
      type: "application/json",
    })
  );



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
