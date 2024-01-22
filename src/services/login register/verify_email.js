import api_url from "../api_urls";

export default async function verify_email(
    otpDetails
){
    const url= api_url.verifyOtp();
    const data = new Blob([JSON.stringify(otpDetails)], {type: 'application/json'})
    
    const res= await fetch(url,
        {
            method: 'POST',
            headers:{
                "Access-Control-Allow-Origin": "*"
            },
    
            body:data
        })
    return res
}