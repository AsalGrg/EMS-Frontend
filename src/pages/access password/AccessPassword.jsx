import { Button, Input, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";
import get_event_data from "../../services/about_event/get_event_data";
import { useNavigate } from "react-router";
const AccessPassword = () => {
  const [error, seterror] = useState("");
  const [password, setpassword] = useState("");

  const navigate= useNavigate();

  document.title = 'Access Password';

  async function handleContinueEvent() {
    const eventId = localStorage.getItem("privateEvent");

    console.log(eventId)
    if (eventId !== undefined && eventId.length > 0) {
      const res = await get_event_data(eventId, password);

      if(res.ok){
        localStorage.setItem('password', password);
        return navigate(`/event/about/${eventId}`);
      }else{
        const data = await res.json();
        seterror(data.message)
      }
    }else{
        seterror('Invalid access request!')
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
          height: "300px",
          width: "350px",
        }}
      >
        <Text size="25px" className="px-2 border border-1 py-2 rounded rounded-2">
          <IoKeyOutline />
        </Text>

        <Text size="xl" fw={600}>
          Enter event access password
        </Text>

        <TextInput
          placeholder="Enter password"
          className="w-100"
          value={password}
          error={error}
          onChange={(e) => setpassword(e.target.value)}
        />

        <Button className="w-100" radius={"md"}
        onClick={handleContinueEvent}
        >
          Continue
        </Button>
      </div>
    </section>
  );
};

export default AccessPassword;
