import api_urls from "../api_urls";

export default async function deactive_promo_code(promoCodeId) {
  const api_url = api_urls.deactivatePromoCode(promoCodeId);

  const token = "Bearer " + localStorage.getItem("token");

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
  });
  return res;
}
