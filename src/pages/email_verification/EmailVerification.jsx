import React, { useState } from "react";
import "../../components/email_verification/EmailVerification.css";
import OtpInputSection from "../../components/email_verification/OtpInput";
import verify_email from "../../services/login register/verify_email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Text } from "@mantine/core";
import verify_otp_forgot_password from "../../services/login register/verify_otp_forgot_password";

const EmailVerification = () => {
  const [otp, setotp] = useState("");

  const userEmail = sessionStorage.getItem("userEmail");

  const { purpose } = useParams();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const otpDetails = {
      otp: otp,
      verificationToken: sessionStorage.getItem("verificationToken"),
    };

    let res;

    if (purpose === "register") {
      res = await verify_email(otpDetails);
    } else if (purpose === "forgotPassword") {
      res = await verify_otp_forgot_password(otpDetails);
    }

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
    } else {
      if (purpose === "register") {
        toast.success(data.message);
        setTimeout(() => navigate("/login"), 3000);
      }
      else if(purpose==='forgotPassword'){
        toast.success(data.message);
        setTimeout(() => navigate("/forgotPassword/changePassword"), 3000);
      }
    }
  };

  return (
    <div className="emailVerificationMainContainer fonts">
      <div className="formContentInputs">
        <div className="otpFormIntro">
          <h1 className="highlights signHighlights">OTP Verification</h1>

          <Text size="lg" fw={"bold"} className="mb-2 text-center" style={{}}>
            Enter OTP code sent to your email <br /> {userEmail}
          </Text>
        </div>
        <div className="otpInputContainer">
          <OtpInputSection otp={otp} setOtp={setotp} />

          <Button
            size="lg"
            radius={"md"}
            disabled={otp.length < 5}
            onClick={handleFormSubmit}
          >
            Verify OTP
          </Button>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
