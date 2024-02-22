import React from "react";
import AboutEvent from "./AboutEvent";
import { useDispatch, useSelector } from "react-redux";
import {
  addStarringInput,
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

const CreateEventSecond = () => {
  const dispatch = useDispatch();

  const formState = useSelector((state) => state.createEvent);

  const initialValues = {
    coverImage: formState.coverImage,
    isAboutClicked: formState.isAboutClicked,
    aboutEvent: formState.aboutEvent,
    hasStarring: formState.hasStarring,
    starrings: formState.starrings,
  };

  function handleSubmit(values, helpers) {
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

    dispatch(increaseActive());
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

            <FormButtons handleSubmit={formik.handleSubmit}/>
          </CreateEventContextWrapper>
        )}
      </Formik>
    </div>
  );
};

export default CreateEventSecond;
