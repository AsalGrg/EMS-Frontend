import React from "react";
import { useState } from "react";
import TicketOptionSelector from "./TicketOptionSelector";
import TicketDetailsInput from "./TicketDetailsInput";
import { useDispatch, useSelector } from "react-redux";
import FormButtons from "../formButtons";
import CreateEventContextWrapper from "../../../context/CreateEventContext";
import { Formik } from "formik";
import { createEventThirdPageSchema } from "../../../schemas";
import {
  decreaseActive,
  increaseActive,
  updateCreateEventField,
} from "../../../pages/create event/CreateEventSlice";
import { Text } from "@mantine/core";
import create_event_third from "../../../services/create event/ceate_event_third_page";
import formDataLogicThirdPage from "../../../pages/create event/formDataLogicThirdPage";
import api_urls from "../../../services/api_urls";

const CreateEventThird = () => {
  const formData = useSelector((state) => state.createEvent);

  const dispatch = useDispatch();

  const initialValues = {
    eventId: formData.eventId,
    ticketType: formData.ticketType,
    ticketName: formData.ticketName,
    ticketPrice: formData.ticketPrice,
    ticketQuantity: formData.ticketQuantity,
    ticketSaleDates: formData.ticketSaleDates,
    saleStartTime: formData.saleStartTime,
    saleEndTime: formData.saleEndTime,
  };

    
  const updateState = (values) => {
    dispatch(
      updateCreateEventField({
        field: "ticketType",
        value: values.ticketType,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "ticketName",
        value: values.ticketName,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "ticketPrice",
        value: values.ticketPrice,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "ticketQuantity",
        value: values.ticketQuantity,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "ticketSaleDates",
        value: values.ticketSaleDates,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "saleStartTime",
        value: values.saleStartTime,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "saleEndTime",
        value: values.saleEndTime,
      })
    );
  };

  const handlePrevBtn = (values) => {
    updateState(values);
    dispatch(decreaseActive());
  };



  async function handleSubmit(values, helpers) {
   
    updateState(values)
    
    const res = await create_event_third(formDataLogicThirdPage(values), api_urls.createEventThirdPage());

    if (res.ok) {
      var data = await res.text();
      console.log("Data" + data);
      dispatch(increaseActive());
    }
  }

  return (
    <div className="container">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={createEventThirdPageSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <CreateEventContextWrapper formik={formik}>
            {formik.touched.ticketType && formik.errors.ticketType ? (
              <Text size="md" c={"red"} mb={"sm"}>
                Select a ticket type
              </Text>
            ) : null}
            <TicketOptionSelector />

            {formik.values.ticketType ? <TicketDetailsInput /> : null}
            <FormButtons
              handleSubmit={formik.handleSubmit}
              handlePreviousBtn= {()=>handlePrevBtn(formik.values)}

              handleDraft={() => {
                create_event_third(
                  formDataLogicThirdPage(formik.values),
                  api_urls.saveEventThirdPageDraft()
                );
              }}
            />
          </CreateEventContextWrapper>
        )}
      </Formik>
    </div>
  );
};

export default CreateEventThird;
