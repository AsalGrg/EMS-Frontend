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
  increaseActive,
  updateCreateEventField,
} from "../../../pages/create event/CreateEventSlice";
import { Text } from "@mantine/core";

const CreateEventThird = () => {
  const formData = useSelector((state) => state.createEvent);

  const dispatch = useDispatch();

  const initialValues = {
    ticketType: formData.ticketType,
    ticketName: formData.ticketName,
    ticketPrice: formData.ticketPrice,
    ticketQuantity: formData.ticketQuantity,
    ticketSaleDates: formData.ticketSaleDates,
    saleStartTime: formData.saleStartTime,
    saleEndTime: formData.saleEndTime,
  };

  const handleSubmit = (values, helpers) => {
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

    dispatch(increaseActive());
  };

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
              <Text size="md" c={"red"} mb={"sm"}>Select a ticket type</Text>
            ) : null}
            <TicketOptionSelector />

            {formik.values.ticketType ? <TicketDetailsInput /> : null}
            <FormButtons handleSubmit={formik.handleSubmit} />
          </CreateEventContextWrapper>
        )}
      </Formik>
    </div>
  );
};

export default CreateEventThird;
