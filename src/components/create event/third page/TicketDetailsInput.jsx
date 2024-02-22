import React, { useState } from "react";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { useDispatch, useSelector } from "react-redux";
import { NumberInput, Select, TextInput, rem } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { times } from "../../utilities/times";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const TicketDetailsInput = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.createEvent);

  const { handleChange, values, errors, touched } = useCreateEventContext();

  const dateIcon = (
    <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  const clockIcon = (
    <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
  );

  const handleInputChange = (name, value) => {
    handleChange({
      target: {
        name: name,
        value: value,
      },
    });
  };

  return (
    <div
      class="offcanvas offcanvas-end"
      tabindex="1"
      style={{
        pointerEvents: "auto",
        zIndex: "2000",
      }}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel" className="text-capitalize">
          {formData.ticketType}
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          // onClick={() =>
          //   dispatch(
          //     updateCreateEventField({
          //       field: "ticketType",
          //       value: "",
          //     })
          //   )
          // }
        ></button>
      </div>
      <div class="offcanvas-body">
        <div className="container-fluid g-4">
          <div className="row g-3">
            <TextInput
              className="col-12"
              leftSectionPointerEvents="none"
              label="Ticket name"
              name="ticketName"
              placeholder="Ticket name"
              value={values.ticketName}
              onChange={handleChange}
              error={touched.ticketName && errors.ticketName}
            />

            <NumberInput
              className="col-md-6 col-12"
              leftSectionPointerEvents="none"
              label="Ticket Quantity"
              placeholder="Ticket quantity"
              name="ticketQuantity"
              value={values.ticketQuantity}
              onChange={(number) => {
                handleInputChange("ticketQuantity", number);
              }}
              error={touched.ticketQuantity && errors.ticketQuantity}
            />

            <NumberInput
              className="col-md-6 col-12"
              disabled={values.ticketType !== "paid"}
              leftSectionPointerEvents="none"
              label="Ticket price"
              prefix="Rs "
              placeholder="Ticket price"
              value={values.ticketType !== "paid" ? null : formData.ticketPrice}
              onChange={(number) => {
                handleInputChange("ticketPrice", number);
              }}
              error={touched.ticketPrice && errors.ticketPrice}
            />

            <DatePickerInput
              popoverProps={{ zIndex: 10000 }}
              className="col-12"
              leftSection={dateIcon}
              type="range"
              label="Ticket sales date"
              name="ticketSaleDates"
              placeholder="Start Date - End Date"
              value={values.ticketSaleDates}
              onChange={(date) => {
                handleInputChange("ticketSaleDates", date);
              }}
              error={touched.ticketSaleDates && errors.ticketSaleDates}
            />

            <Select
              comboboxProps={{ zIndex: 10000 }}
              className="col-12 col-md-6"
              label="Select sale start time"
              leftSection={clockIcon}
              placeholder="Start Time"
              name="saleStartTime"
              value={values.saleStartTime}
              onChange={(time) => {
                handleInputChange("saleStartTime", time);
              }}
              data={times}
              searchable
              error={touched.saleStartTime && errors.saleStartTime}
            />

            <Select
              comboboxProps={{ zIndex: 10000 }}
              className="col-12 col-md-6"
              label="Select end time"
              leftSection={clockIcon}
              placeholder="Start Time"
              name="saleEndTime"
              value={values.saleEndTime}
              onChange={(time) => {
                handleInputChange("saleEndTime", time);
              }}
              data={times}
              searchable
              error={touched.saleEndTime && errors.saleEndTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsInput;
