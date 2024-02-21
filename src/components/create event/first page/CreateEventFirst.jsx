import React from "react";
import BasicInfo from "./BasicInfo";
import Location from "./Location";
import DateAndTime from "./DateAndTime";
import FormButtons from "../formButtons";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEventFirstPageSchema } from "../../../schemas";
import {
  increaseActive,
  updateCreateEventField,
} from "../../../pages/create event/CreateEventSlice";
import CreateEventContextWrapper from "../../../context/CreateEventContext";
const CreateEventFirst = () => {
  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const initialValues = {
    eventTitle: formData.eventTitle,
    category: formData.category,
    venueType: formData.venueType,
    location: "",
    meetingLink: formData.meetingLink,
    selectedPlace: formData.selectedPlace,
    eventDates: formData.eventDates,
    eventStartTime: formData.eventStartTime,
    eventEndTime: formData.eventEndTime,
  };

  function handleSubmit(values, helpers) {
    dispatch(
      updateCreateEventField({
        field: "eventTitle",
        value: values.eventTitle,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "category",
        value: values.category,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "venueType",
        value: values.venueType,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "meetingLink",
        value: values.meetingLink,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "selectedPlace",
        value: values.selectedPlace,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "eventDates",
        value: values.eventDates,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "eventStartTime",
        value: values.eventStartTime,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "eventEndTime",
        value: values.eventEndTime,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "eventTitle",
        value: values.eventTitle,
      })
    );

    dispatch(increaseActive());
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={createEventFirstPageSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <CreateEventContextWrapper formik={formik}>
          <div className="mb-3">
            <BasicInfo />
          </div>

          {formik.handleChange}

          <div className="mb-3">
            <Location />
          </div>

          <div className="mb-3">
            <DateAndTime />
          </div>
          <FormButtons formik={formik} />
        </CreateEventContextWrapper>
      )}
    </Formik>
  );
};

export default CreateEventFirst;
