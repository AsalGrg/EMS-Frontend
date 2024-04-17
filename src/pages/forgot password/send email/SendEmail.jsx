import { Button, Text, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";
import send_email_forgot_password from "../../../services/login register/send_email_forgot_password";
import { useNavigate } from "react-router";

const SendEmail = () => {
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    //here the formData comes in the form of an object that is suitable to pass as a userDetails in the api call
    const sendData = {
      email: email,
    };
    const res = await send_email_forgot_password(sendData);
    const data = await res.json();

    if (!res.ok) {
      seterror(data.message);
    } else {
      console.log("here")
      sessionStorage.setItem("verificationToken", data.verificationToken);
      console.log(data.verificationToken);
      return navigate("/forgotPassword/verify-email");
    }
  };

  return (
    <section
      className="h-100 w-100 d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="rounded d-flex justify-content-start rounded-3 align-items-center flex-column px-3 py-3 gap-3"
        style={{
          height: "300px",
          width: "350px",
        }}
      >
        <Title order={1} fw={900}>
          Forgot Password?
        </Title>

        <Text className="text-center" fw={600} size="sm" c={"dimmed"} mt={"sm"}>
          Don't worry! It happens. Please enter email address associated with
          your account.
        </Text>

        <TextInput
          mt={"lg"}
          placeholder="Enter email"
          className="w-100"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          error={error}

          //   onChange={(e) => setpassword(e.target.value)}
        />

        <Button className="w-100" radius={"md"}
        onClick={handleFormSubmit}
        >
          Continue
        </Button>
      </div>
    </section>
  );
};

export default SendEmail;
