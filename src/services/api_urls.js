const BASE_URL = "http://localhost:3232"

const api_urls= {

    loginUser: () => `${BASE_URL}/login`,
    registerUser: ()=> `${BASE_URL}/register`,
    verifyOtp: ()=> `${BASE_URL}/verify-otp`,
    createEvent: ()=> `${BASE_URL}/addEvent`,
    check: ()=> `${BASE_URL}/check`
}

export default api_urls

