import React, { useState } from "react";
import "../../components/login signup/LoginSignUp.css";
import api_url from "../../services/api_urls";
import register_user from "../../services/login register/register_user";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Button, Divider, Text, TextInput, Title } from "@mantine/core";

const Register = () => {
  const form = useForm(); //a custom react hook to manage the form more efficiently in react

  const { register, handleSubmit } = form; //refragmenting register method provided by the useForm

  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const url = api_url.registerUser();

  const handleFormSubmit = async (formData) => {
    //here the formData comes in the form of an object that is suitable to pass as a userDetails in the api call
    console.log(formData);

    console.log(url);

    const res = await register_user(formData);
    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
    } else {
      console.log("Inside register success");
      toast.success(data.message);

      sessionStorage.setItem("verificationToken", data.verificationToken);
      sessionStorage.setItem("userEmail", data.userEmail);

      setTimeout(3000);
      return navigate("/verify-email");
    }
  };

  return (
    <div
      className="row w-100 flex-reverse"
      style={{
        height: "100vh",
      }}
    >
      <div className="col-6 h-100 justify-content-center d-flex">
        <div className="w-50 h-100 d-flex flex-column gap-4 justify-content-center">
          <Title order={1} fw={800} className="mt-5">
            Register
          </Title>

          <div className="d-flex flex-column gap-3 mt-3">
            <TextInput
              placeholder="Username"
              size="lg"
              id="username"
              {...register("username")}
            />
            <TextInput
              placeholder="Email address"
              size="lg"
              id="email"
              {...register("email")}
            />
            <TextInput
              placeholder="Password"
              size="lg"
              id="password"
              {...register("password")}
            />
            <Button
              className="w-100"
              size="lg"
              onClick={handleSubmit(handleFormSubmit)}
            >
              Login
            </Button>
          </div>

          <Divider />
          <Text>
            Already have account?<span className="btn btn-link"
            onClick={()=> navigate('/login')}
            > Login</span>
          </Text>

          <ToastContainer />
        </div>
      </div>

      <div className="col-6 h-100">
        <img
          src="https://cdn.evbstatic.com/s3-build/perm_001/1bab52/django/images/login/lateral-image-1.jpg"
          style={{
            objectFit: "cover",
          }}
          className="h-100 w-100 img-fluid"
        ></img>
      </div>
    </div>
  );
};

export default Register;
