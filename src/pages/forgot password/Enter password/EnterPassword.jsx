import React, { useState } from "react";
import update_new_password_forgot_password from "../../../services/login register/update_new_password_forgot_password";
import { toast } from "react-toastify";
import { Button, Text, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router";

const EnterPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPasswordError, setconfirmPasswordError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  async function handleSubmit() {
    if (confirmPassword !== password) {
        setpasswordError('')
      setconfirmPasswordError("Passwords does not match");
      return;
    }
    const sendData = {
      newPassword: password,
      emailVerificationToken: sessionStorage.getItem("verificationToken"),
    };

    const res = await update_new_password_forgot_password(sendData);
    const data = await res.json();

    if (res.ok) {
      setconfirmPasswordError("");
      toast.success(data.message);
      setTimeout(() => navigate("/login"), 3000);
    } else {
      setconfirmPasswordError("");
      setpasswordError(data.message);
    }
  }
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
          height: "380px",
          width: "400px",
        }}
      >
        <Title order={1} fw={900}>
          Create new Password
        </Title>

        <Text className="text-center" fw={600} size="sm" c={"dimmed"} mt={"sm"}>
          This password should be different from previous password
        </Text>

        <TextInput
          mt={"lg"}
          placeholder="Enter new password"
          className="w-100"
          value={password}
          type="password"
          error={passwordError}
          onChange={(e) => setPassword(e.target.value)}
          //   onChange={(e) => setpassword(e.target.value)}
        />

        <TextInput
          placeholder="Confirm password"
          className="w-100"
          value={confirmPassword}
          error={confirmPasswordError}
          type="password"
          onChange={(e) => setconfirmPassword(e.target.value)}
        />

        <Button className="w-100" radius={"md"} onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </section>
  );
};

export default EnterPassword;
