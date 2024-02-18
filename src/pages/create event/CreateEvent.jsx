import React, { useEffect } from "react";
import { useState } from "react";
import { Stepper } from "@mantine/core";
import "../../components/create event/createEvent.css";
import CreateEventFirst from "../../components/create event/first page/CreateEventFirst";
import CreateEventSecond from "../../components/create event/second page/CreateEventSecond";
import CreateEventThird from "../../components/create event/third page/CreateEventThird";
import { CreateEventFourth } from "../../components/create event/fourth page/CreateEventFourth";
import { useDispatch, useSelector } from "react-redux";
import { formDataLogic } from "./formDataLogic";
import create_event from "../../services/create event/create_event";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEventFirstPageSchema } from "../../schemas";

const CreateEvent = () => {
  const [active, setactive] = useState(0);

  const currentPage =
    active == 0 ? (
      <CreateEventFirst />
    ) : active == 1 ? (
      <CreateEventSecond />
    ) : active == 2 ? (
      <CreateEventThird />
    ) : (
      <CreateEventFourth />
    );

  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const firstPageInitialValue = {
    eventTitle: formData.eventTitle,
    category: formData.category,
    location: formData.selectedPlace ? formData.selectedPlace.display_name : "",
    meetingLink: formData.meetingLink,
    eventDates: formData.eventStartDates,
    eventStartTime: formData.eventStartTime,
    eventEndTime: formData.eventEndTime,
  };

  const initialValues = active === 0 ? firstPageInitialValue : null;

  const handlePrevBtn = () => {
    setactive((prevPage) => prevPage - 1);
  };

  const handleNextBtn = () => {
    // const user =  createEventFirstPageSchema.validate(initialValues):null;
    // console.log(user)
    // setactive((prevPage) => prevPage + 1);

    try {
      active === 0 ? createEventFirstPageSchema.validate(initialValues) : null;
      // If validation succeeds, submit the form
      console.log("Form data:", initialValues);
    }  catch (validationErrors) {
      // If validation fails, update errors state with all error messages
      const errors = validationErrors.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      console.log(errors);
    }
  };

  function checkStarringFields() {
    if (formData.hasStarring) {
      formData.starrings.forEach((eachStarring) => {
        if (eachStarring.starringName === "") {
          toast.error("Starring name cannot be empty");
          return false;
        } else if (eachStarring.starringPhoto === "") {
          toast.error("Starring photo cannot be empty");
          return false;
        }
      });

      return true;
    } else {
      return true;
    }
  }
  const handlePublishBtn = async () => {
    let isStarringFieldValid = checkStarringFields();

    if (isStarringFieldValid) {
      const res = await create_event(formDataLogic(formData));
      // const res= await create_event();
      const data = await res.json();

      // console.log( formDataLogic({ formState: formData }))

      console.log(data);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="create-event-main-container">
        <div className="mt-5 d-none d-md-block">
          <Stepper active={active} onStepClick={setactive}>
            <Stepper.Step label="Basic Info" description="" />

            <Stepper.Step label="Additional Info" />

            <Stepper.Step label="Event Tickets" />

            <Stepper.Step label="Publish" />
          </Stepper>
        </div>

        <div className="mt-3">{currentPage}</div>

        <div className="d-flex justify-content-between mt-4">
          <button
            disabled={active === 0}
            className="signButton"
            onClick={handlePrevBtn}
          >
            Previous
          </button>

          {active !== 3 ? (
            <button
              className="signButton"
              type="submit"
              onClick={handleNextBtn}
            >
              Next
            </button>
          ) : (
            <button className="signButton" onClick={handlePublishBtn}>
              Publish
            </button>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default CreateEvent;
