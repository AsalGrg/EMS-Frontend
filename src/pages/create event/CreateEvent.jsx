import React, { useEffect } from "react";
import { useState } from "react";
import { Stepper } from "@mantine/core";
import "../../components/create event/createEvent.css";
import CreateEventFirst from "../../components/create event/first page/CreateEventFirst";
import CreateEventSecond from "../../components/create event/second page/CreateEventSecond";
import CreateEventThird from "../../components/create event/third page/CreateEventThird";
import { CreateEventFourth } from "../../components/create event/fourth page/CreateEventFourth";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEventFirstPageSchema } from "../../schemas";
import { Formik } from "formik";

const CreateEvent = () => {

  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  
  const currentPage =
  formData.active == 0 ? (
      <CreateEventFirst />
    ) : formData.active == 1 ? (
      <CreateEventSecond />
    ) :formData.active == 2 ? (
      <CreateEventThird />
    ) : (
      <CreateEventFourth />
    );


  const firstPageInitialValue = {
    eventTitle: formData.eventTitle,
    category: formData.category,
    location: formData.selectedPlace ? formData.selectedPlace.display_name : "",
    meetingLink: formData.meetingLink,
    eventDates: formData.eventStartDates,
    eventStartTime: formData.eventStartTime,
    eventEndTime: formData.eventEndTime,
  };

  const initialValues = formData.active === 0 ? firstPageInitialValue : null;

  const handleNextBtn = () => {
    // const user =  createEventFirstPageSchema.validate(initialValues):null;
    // console.log(user)
    // setactive((prevPage) => prevPage + 1);

    try {
      formData.active === 0 ? createEventFirstPageSchema.validate(initialValues) : null;
      // If validation succeeds, submit the form
      console.log("Form data:", initialValues);
    } catch (validationErrors) {
      // If validation fails, update errors state with all error messages
      const errors = validationErrors.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      console.log(errors);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
        console.log("hjeh")
        // setSubmitting(false);
      }}
      // Define validation schema for each step
      validationSchema={[createEventFirstPageSchema]}
    >
      <div className="container d-flex justify-content-center fonts">
        <div className="create-event-main-container">
          <div className="mt-5 d-none d-md-block">
            <Stepper active={formData.active} >
              <Stepper.Step label="Basic Info" description="" />

              <Stepper.Step label="Additional Info" />

              <Stepper.Step label="Event Tickets" />

              <Stepper.Step label="Publish" />
            </Stepper>
          </div>

          <div className="mt-3">{currentPage}</div>
        </div>

        <ToastContainer />
      </div>
    </Formik>
  );
};

export default CreateEvent;
