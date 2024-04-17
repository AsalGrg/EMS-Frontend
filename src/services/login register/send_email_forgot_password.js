import api_url from "../api_urls";

export default async function send_email_forgot_password(
    sendData
){
    const url= api_url.forgotPasswordRequest();
    const data = new Blob([JSON.stringify(sendData)], {type: 'application/json'})
    
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