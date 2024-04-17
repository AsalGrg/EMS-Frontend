import api_url from "../api_urls";

export default async function update_new_password_forgot_password(
    sendData
){
    const url= api_url.changePasswordForgotPassword();
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