import { Avatar, Text } from "@mantine/core";
import React from "react";
import EventCreationOptions from "../../../components/vendor/home/EventCreationOptions";
import ProfileSnippet from "../../../components/vendor/home/ProfileSnippet";

const VendorHome = () => {
  return (
    <>
      <div className="border py-4 px-4">
        <h1 className="display-6 fw-bold">Goodmorning, Asal</h1>
        <Text fs={"italic"} size="md">
          Mar 20, 2024
        </Text>
      </div>

      <ProfileSnippet/>

      <EventCreationOptions/>
    </>
  );
};

export default VendorHome;
