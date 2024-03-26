const BASE_URL = "http://localhost:3232"

const api_urls= {
    getUserData: ()=> `${BASE_URL}/user/loggedInSnippet`,
    getUserProfile: ()=> `${BASE_URL}/user/profile`,
    loginUser: () => `${BASE_URL}/login`,
    registerUser: ()=> `${BASE_URL}/register`,
    verifyOtp: ()=> `${BASE_URL}/verify-otp`,
    createEventFirstPage: ()=> `${BASE_URL}/addFirstPageInfo`,
    createEventSecondPage: ()=> `${BASE_URL}/addSecondPageInfo`,
    saveEventSecondPageDraft: ()=> `${BASE_URL}/draftSecondPageInfo`,
    createEventThirdPage: ()=> `${BASE_URL}/addThirdPageDetails`,
    saveEventThirdPageDraft: ()=> `${BASE_URL}/draftThirdPageInfo`,
    createEventFourthPage: ()=> `${BASE_URL}/addFourthPageDetails`,
    saveEventFourthPageDraft: ()=> `${BASE_URL}/draftFourthPageDetails`,
    createEvent: ()=> `${BASE_URL}/addEvent`,
    searchEvent: (eventTitle, location)=> `${BASE_URL}/search/${eventTitle}/${location}`,
}

export default api_urls

