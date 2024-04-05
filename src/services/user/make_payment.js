import api_urls from "../api_urls";

export default async function make_payment(paymentDetails){
    const api_url = api_urls.makePayment();

  const token = "Bearer " + localStorage.getItem("token");

  const form = new FormData();

  form.append(
    "paymentDetails",
    new Blob([JSON.stringify(paymentDetails)], {
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