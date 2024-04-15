import React, { useState } from "react";
import "../../components/login signup/LoginSignUp.css";
import login_user from "../../services/login register/loginUser";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Button, Divider, Text, TextInput, Title } from "@mantine/core";
const Login = () => {
  const form = useForm();

  const { register, handleSubmit, resetField, reset } = form;

  const navigate = useNavigate();

  const handleLoginSubmit = async (formData, e) => {
    reset(formData);

    const res = await login_user(formData);
    const response = await res.json();

    if (!res.ok) {
      console.log(response);
      toast.error(response.message);
    } else {
      console.log(response);
      localStorage.setItem("token", response.jwtToken);
      toast.success(response.message);
      setTimeout(() => navigate("/"), 2000);
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
            Login
          </Title>

          <div className="d-flex flex-column gap-3 mt-3">
            <TextInput
              placeholder="Email address"
              size="lg"
              id="email"
              {...register("email")}
            />
            <TextInput
              placeholder="Password"
              type="password"
              size="lg"
              id="password"
              {...register("password")}
            />
            <Button className="w-100" size="lg"
            onClick={handleSubmit(handleLoginSubmit)}
            >
              Login
            </Button>
          </div>

          <Divider />
          <Text>
            Register new account?<span className="btn btn-link"
            onClick={()=> navigate('/register')}
            > Sign up</span>
          </Text>
          <ToastContainer/>
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

export default Login;
