import React, { useState } from "react";
import TextArea from "./TextArea";
import AboutText from "./AboutText";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { useCreateEventContext } from "../../../context/CreateEventContext";
import { Text } from "@mantine/core";

const AboutEvent = () => {
  const { handleChange, values, touched, errors } = useCreateEventContext();

  const updateAboutClicked = () => {
    handleChange({
      target: {
        name: "isAboutClicked",
        value: true,
      },
    });
  };

  return (
    <>
      <div
        className="px-4 rounded cursor mt-3"
        style={touched.aboutEvent && errors.aboutEvent ? {border: "1px solid red"}: {border: "0.5px solid silver"} }
        onClick={updateAboutClicked}
      >
        <h2 className="mt-3">About Event</h2>

        <AboutText />
        {!values.isAboutClicked ? null : <TextArea />}
      </div>

      {touched.aboutEvent && errors.aboutEvent ? (
        <Text size="md" c={"red"} mt={1}>{errors.aboutEvent}</Text>
      ) : null}
    </>
  );
};

export default AboutEvent;
