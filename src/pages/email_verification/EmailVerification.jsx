import React, { useState } from 'react'
import '../../components/email_verification/EmailVerification.css'
import OtpInputSection from '../../components/email_verification/OtpInput'
import verify_email from '../../services/login register/verify_email'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {

    const [otp, setotp] = useState('')

    const userEmail= sessionStorage.getItem('userEmail')

    const navigate = useNavigate()

    const handleFormSubmit =async (e)=>{
        e.preventDefault();

        const otpDetails= {
            otp: otp,
            verificationToken: sessionStorage.getItem('verificationToken')
        }

        const res= await verify_email(otpDetails)

        const data = await res.json();

        if(!res.ok){
            toast.error(data.message);
        }

        else{
            toast.success(data.message)
            setTimeout(()=> navigate('/login'), 3000)

        }

    }

  return (
    <div className='emailVerificationMainContainer fonts' >

        <div className="formContentInputs">

            <div className="otpFormIntro">
                <h1 className="highlights signHighlights">OTP Verification</h1>

                <p
                style={{
                    textAlign: 'center',
                    margin: '20px 0px',
                    fontSize:'17px',
                    letterSpacing:'1px',
                    color: 'grey'
                }}>Enter OTP code sent to your email <br/> {userEmail}</p>
            </div>
            <div className="otpInputContainer">

                <OtpInputSection 
                otp= {otp}
                setOtp={setotp}/>

                <button className='universalButton loginSignupBtn' 
                disabled={otp.length<5}
                onClick={handleFormSubmit}>Verify OTP</button>

                <ToastContainer/>
            </div>
        </div>
    </div>
  )
}

export default EmailVerification