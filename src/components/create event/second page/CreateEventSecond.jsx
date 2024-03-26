import React, { useState } from "react";
import AboutEvent from "./AboutEvent";
import { useDispatch, useSelector } from "react-redux";
import {
  addStarringInput,
  decreaseActive,
  increaseActive,
  removeEachStarring,
  updateCreateEventField,
} from "../../../pages/create event/CreateEventSlice";
import ImageSection from "./ImageSection";
import EventStarringOption from "./EventStarringOption";
import FormButtons from "../formButtons";
import { Formik } from "formik";
import { createEventSecondPageSchema } from "../../../schemas";
import CreateEventContextWrapper from "../../../context/CreateEventContext";
import create_event_second_page from "../../../services/create event/create_event_second_page";
import formDataLogicSecondPage from "../../../pages/create event/formDataLogicSecondPage";
import api_urls from "../../../services/api_urls";

const CreateEventSecond = () => {
  const dispatch = useDispatch();

  const formState = useSelector((state) => state.createEvent);

  const initialValues = {
    eventId: formState.eventId,
    coverImage: formState.coverImage,
    isAboutClicked: formState.isAboutClicked,
    aboutEvent: formState.aboutEvent,
    hasStarring: formState.hasStarring,
    starrings: formState.starrings,
  };

  
  const updateState = (values) => {
    dispatch(
      updateCreateEventField({
        field: "coverImage",
        value: values.coverImage,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "isAboutClicked",
        value: values.isAboutClicked,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "aboutEvent",
        value: values.aboutEvent,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "hasStarring",
        value: values.hasStarring,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "starrings",
        value: values.starrings,
      })
    );
  };

  const handlePrevBtn = (values) => {
    updateState(values);
    dispatch(decreaseActive());
  };


  async function handleSubmit(values, helpers) {
   
    updateState(values)

    const res = await create_event_second_page(
      formDataLogicSecondPage(values),
      api_urls.createEventSecondPage()
    );

    if (res.ok) {
      var data = await res.text();
      console.log("Data" + data);
      dispatch(increaseActive());
    }
  }

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={createEventSecondPageSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <CreateEventContextWrapper formik={formik}>
            <ImageSection />

            <AboutEvent />

            <EventStarringOption />

            <FormButtons
              handleSubmit={formik.handleSubmit}
              handlePreviousBtn= {()=>handlePrevBtn(formik.values)}
              handleDraft={() => {
                create_event_second_page(
                  formDataLogicSecondPage(formik.values),
                  api_urls.saveEventSecondPageDraft()
                );
              }}
            />
          </CreateEventContextWrapper>
        )}
      </Formik>
    </div>
  );
};

export default CreateEventSecond;
