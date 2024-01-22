import React, { useState } from 'react'
import OtpInput from 'react-otp-input';


const OtpInputSection = ({otp, setOtp}) => {
  
  return (
    <OtpInput 
        inputStyle={{
            height:'50px',
            width: '50px',
            borderRadius: '5px',
            border: '2px solid #FFF',
            backgroundColor: '#FFFFFF33',
            color: '#FFF',
            fontSize: '20px'

        }}
      value={otp}
      onChange={setOtp}
      numInputs={5}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  )
}

export default OtpInputSection