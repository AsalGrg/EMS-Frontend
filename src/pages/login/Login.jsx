import React, { useState } from 'react'
import '../../components/login signup/LoginSignUp.css'
import login_user from '../../services/login register/loginUser'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
const Login = () => {

  const form= useForm()

  const {register, handleSubmit, resetField, reset}= form

  const navigate= useNavigate();

  const handleLoginSubmit= async (formData, e)=>{

    reset(formData)

    const res= await login_user(formData)
    const response = await res.json()

    if(!res.ok){

      console.log(response)
      toast.error(response.message)
    }

    else{
      console.log(response)
      localStorage.setItem("token",response.jwtToken)
      toast.success(response.message)
      setTimeout(()=> navigate('/'), 2000)
    }
  }
  return (
    <div className="l_s_mainContainer"
    style={{backgroundImage: `url("https://eventmie-pro.classiebit.com/frontend-assets?path=img%2Fbg-pattern.png")`}}>
      
      <div className="formContent">
        
        <h1 className="highlights signHighlights">Login</h1>

        <div className="formContentInputs">

          <input type="text" placeholder='Email or username'className='formInput'
          id='email'
          {...register('email')}/>

          <input type="password" placeholder='Password' className='formInput'
          id='password'
          {...register('password')}
          />

          <div className="checkBoxCon">
            <input type="checkbox"/>
            <p>Remember me</p>
          </div>
    

          <button className='universalButton loginSignupBtn' onClick={handleSubmit(handleLoginSubmit)}>Login</button>
          <ToastContainer />

          <div className="options">
            <p>Forgot Password?</p>

            <p>Register</p>
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

export default Login