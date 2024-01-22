import api_urls from "../api_urls";

export default async function login_user(
    userLoginData
){
    const api_url= api_urls.loginUser()

    const res = await fetch(api_url,
    {   
        // mode: 'no-cors',
        method: 'POST',
        headers:{
            "Access-Control-Allow-Origin": "*"
        },

        body:new Blob([JSON.stringify(userLoginData)], {type: 'application/json'})

    })
        return await res;

  
    

}