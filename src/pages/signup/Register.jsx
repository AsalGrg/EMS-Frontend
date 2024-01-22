import React, { useState } from 'react'
import '../../components/login signup/LoginSignUp.css'
import api_url from '../../services/api_urls'
import register_user from '../../services/login register/register_user'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'


const Register = () => {

  const form= useForm();//a custom react hook to manage the form more efficiently in react

  const {register, handleSubmit}= form //refragmenting register method provided by the useForm

  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: ""
  })


  const navigate= useNavigate();

  const url = api_url.registerUser()

  const handleFormSubmit = async (formData)=>{
   
   //here the formData comes in the form of an object that is suitable to pass as a userDetails in the api call
    console.log(formData)
    
    console.log(url)

    const res = await register_user(formData);
    const data = await res.json()

    if(!res.ok){
      
      toast.error(data.message)
    }
    
    else{
      console.log("Inside register success")
      toast.success(data.message)

      sessionStorage.setItem('verificationToken',data.verificationToken)
      sessionStorage.setItem('userEmail', data.userEmail)

      setTimeout(3000)
      return navigate('/verify-email')
    }
  }

  return (
    <div className="l_s_mainContainer"
    style={{backgroundImage: `url("https://eventmie-pro.classiebit.com/frontend-assets?path=img%2Fbg-pattern.png")`}}>

      <div className="formContent">
        
        <h1 className="highlights signHighlights">Register</h1>

        <div className="formContentInputs">

          <input type="text" placeholder='Username'className='formInput' id='username'
          {...register('username')}/>

          <input type="text" placeholder='Email'className='formInput' id= 'email' 
          {...register('email')} />

          <input type="password" placeholder='Password' className='formInput' id='password' 
          {...register('password')} />

          <input type="text" placeholder='Address' className='formInput' id='address' 
          {...register('address')} />

          <input type="text" placeholder='Phone Number' className='formInput' id='phoneNumber' 
          {...register('phoneNumber')} />


          <div className="checkBoxCon">
            <input type="checkbox"/>
            <p>Agree Terms and Conditions</p>
          </div>
    

          <button className='universalButton loginSignupBtn' onClick={handleSubmit(handleFormSubmit)}>Register</button>
          <ToastContainer/>
          <div className="options">
            <p>Forgot Password?</p>

            <p>Login</p>
          </div>


          <div className="otherSignOptions">

            <p>Or Continue with</p>

            <div className="signMethodsOpt">
              <button className='universalButton loginSignupBtn otherOptButtons'>Facebook</button>

              <button className='universalButton loginSignupBtn otherOptButtons'>Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register