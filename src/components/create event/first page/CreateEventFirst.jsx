import React from "react";
import BasicInfo from "./BasicInfo";
import Location from "./Location";
import DateAndTime from "./DateAndTime";
import FormButtons from "../formButtons";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEventFirstPageSchema } from "../../../schemas";

const CreateEventFirst = () => {
  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const initialValues = {
    eventTitle: formData.eventTitle,
    category: formData.category,
    venueType: formData.venueType,
    location: formData.selectedPlace ? formData.selectedPlace.display_name : "",
    meetingLink: formData.meetingLink,
    matchedPlaces: formData.matchedPlaces,
    selectedPlace: formData.selectedPlace,
    eventDates: formData.eventStartDates,
    eventStartTime: formData.eventStartTime,
    eventEndTime: formData.eventEndTime,
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={createEventFirstPageSchema}
    >
      {(formik) => (
        <>
          <div className="mb-3">
            <BasicInfo formik={formik} />
          </div>

          {formik.handleChange}

          <div className="mb-3">
            <Location formik={formik} />
          </div>

          <div className="mb-3">
            <DateAndTime formik={formik} />
          </div>
          <FormButtons handleSubmit={formik.handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default CreateEventFirst;
