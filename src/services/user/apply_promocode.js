import api_urls from "../api_urls";

export default async function apply_promocode(evetId, promoCode, total) {
  const api_url = api_urls.applyPromoCode(evetId, promoCode, total);
  console.log(api_url)

  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
  });
  return res;
}
