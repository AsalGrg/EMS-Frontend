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
import get_event_draft_details from "../../services/user/get_event_draft_details";
import { useLoaderData, useParams } from "react-router";
import { updateEntireCreateEventState } from "./CreateEventSlice";
import formatTime from "../../components/utilities/formatTime";
import get_event_edit_details from "../../services/user/get_event_edit_details";

const CreateEvent = () => {
  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const loaderData = useLoaderData();
  const { eventId, creationType } = useParams();

  useEffect(() => {
    if (creationType !== "create") {
      console.log(loaderData);
      dispatch(updateEntireCreateEventState(loaderData));
    }
  }, []);

  const currentPage =
    formData.active == 0 ? (
      <CreateEventFirst />
    ) : formData.active == 1 ? (
      <CreateEventSecond />
    ) : formData.active == 2 ? (
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
      formData.active === 0
        ? createEventFirstPageSchema.validate(initialValues)
        : null;
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
        console.log("hjeh");
        // setSubmitting(false);
      }}
      // Define validation schema for each step
      validationSchema={[createEventFirstPageSchema]}
    >
      <div className="container d-flex justify-content-center fonts">
        <div className="create-event-main-container">
          <div className="mt-5 d-none d-md-block">
            <Stepper active={formData.active}>
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

export async function createEventLoader({ params }) {
  const { creationType, eventId } = params;
  let res;
  if (creationType === "create") {
    return null;
  } else if (creationType === "draft") {
    res = await get_event_draft_details(eventId);
  } else if (creationType === "edit") {
    res = await get_event_edit_details(eventId);
    console.log("ejjjjjj")
  }

  if (res.ok) {
    const data = await res.json();

    console.log("loader");

    data.eventDates = data.eventDates.map((dateString) => new Date(dateString));

    data.eventStartTime = formatTime(data.eventStartTime);
    data.eventEndTime = formatTime(data.eventEndTime);

    data.ticketSaleDates = data.ticketSaleDates.map((each) => {
      if (each !== null) {
        return new Date(each);
      } else {
        return null; // If the date is null, return null
      }
    });

    data.saleStartTime =
      data.saleStartTime !== null ? formatTime(data.saleStartTime) : null;
    data.saleEndTime =
      data.saleEndTime !== null ? formatTime(data.saleEndTime) : null;
    return data;
  }

  return null;
}
