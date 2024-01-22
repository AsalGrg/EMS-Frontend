
import api_urls from "../api_urls";

export default async function register_user(
    userRegisterData
){
    const api_url= api_urls.registerUser()

    const data = new FormData()
    data.append('userDetails', new Blob([JSON.stringify(userRegisterData)], { type: 'application/json'}))
    // data.append('userDp', )
    // const data = 
    const res = await fetch(api_url,
    {   
        // mode: 'no-cors',
        method: 'POST',
        headers:{
            "Access-Control-Allow-Origin": "*"
        },

        body:data

    })
        return  await res;

  
    

}