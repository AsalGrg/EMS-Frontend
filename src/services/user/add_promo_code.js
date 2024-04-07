import api_urls from "../api_urls";

export default async function add_promo_code(requestData) {

  const api_url = api_urls.addPromoCode();
  console.log(api_url)

  const formData = new FormData();

  formData.append(
    "promoCodeDetails",
    new Blob([JSON.stringify(requestData)], {
      type: "application/json",
    })
  );

  const token ="Bearer "+ localStorage.getItem("token")

  const res = await fetch(api_url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token
    },
    body: formData
  });
  return res;
}
