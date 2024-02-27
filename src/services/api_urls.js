const BASE_URL = "http://localhost:3232"

const api_urls= {
    getUserData: ()=> `${BASE_URL}/user/loggedInSnippet`,
    getUserProfile: ()=> `${BASE_URL}/user/profile`,
    loginUser: () => `${BASE_URL}/login`,
    registerUser: ()=> `${BASE_URL}/register`,
    verifyOtp: ()=> `${BASE_URL}/verify-otp`,
    createEvent: ()=> `${BASE_URL}/addEvent`,
    searchEvent: (eventTitle, location)=> `${BASE_URL}/search/${eventTitle}/${location}`,
}

export default api_urls

