import React from "react";
import AboutEvent from "./AboutEvent";
import { useDispatch, useSelector } from "react-redux";
import {
  addStarringInput,
  removeEachStarring,
  updateCreateEventField,
} from "../../../pages/create event/CreateEventSlice";
import ImageSection from "./ImageSection";
import EventStarringOption from "./EventStarringOption";

const CreateEventSecond = () => {
  const dispatch = useDispatch();

  const formState = useSelector((state) => state.createEvent);

  const handleInputChange = (e) => {
    const fieldValue = {
      field: e.target.name,
      value: e.target.value,
    };
    dispatch(updateCreateEventField(fieldValue));
  };

  const handleToggle = (e) => {
    const fieldValue = {
      field: e.target.name,
      value: !formState[e.target.name],
    };
    console.log(fieldValue);
    dispatch(updateCreateEventField(fieldValue));
  };

  return (
    <div className="container">
      <ImageSection />

      <AboutEvent />

      <EventStarringOption />
    </div>
  );
};

export default CreateEventSecond;
