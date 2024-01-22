import React, { useState } from "react";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { useDispatch, useSelector } from "react-redux";
import { NumberInput, Select, TextInput, rem } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { times } from "../../utilities/times";

const TicketDetailsInput = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.createEvent);

  const dateIcon = (
    <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  const clockIcon = (
    <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
  );

  const handleInputChange = (e) => {
    const fieldValue = {
      field: e.target.name,
      value: e.target.value,
    };

    dispatch(updateCreateEventField(fieldValue));
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
          onClick={() =>
            dispatch(
              updateCreateEventField({
                field: "ticketType",
                value: "",
              })
            )
          }
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
              value={formData.ticketName}
              onChange={(e) => handleInputChange(e)}
            />

            <NumberInput
              className="col-md-6 col-12"
              leftSectionPointerEvents="none"
              label="Ticket Quantity"
              placeholder="Ticket quantity"
              value={formData.ticketQuantity}
              onChange={(number) => {
                dispatch(
                  updateCreateEventField({
                    field: "ticketQuantity",
                    value: number,
                  })
                );
              }}
            />

            <NumberInput
              className="col-md-6 col-12"
              disabled={formData.ticketType !== "paid"}
              leftSectionPointerEvents="none"
              label="Ticket price"
              prefix="Rs "
              placeholder="Ticket price"
              value={formData.ticketType !== "paid" ? null : formData.ticketPrice}
              onChange={(number) => {
                dispatch(
                  updateCreateEventField({
                    field: "ticketPrice",
                    value: number,
                  })
                );
              }}
            />

            <DatePickerInput
              popoverProps={{ zIndex: 10000 }}
              className="col-12"
              leftSection={dateIcon}
              type="range"
              label="Ticket sales date"
              name="ticketSaleDates"
              placeholder="Start Date - End Date"
              value={formData.ticketSaleDates}
              onChange={(date) => {
                dispatch(
                  updateCreateEventField({
                    field: "ticketSaleDates",
                    value: date,
                  })
                );
              }}
            />

            <Select
              comboboxProps={{ zIndex: 10000 }}
              className="col-12 col-md-6"
              label="Select sale start time"
              leftSection={clockIcon}
              placeholder="Start Time"
              name="saleStartTime"
              value={formData.saleStartTime}
              onChange={(time) => {
                dispatch(
                  updateCreateEventField({
                    field: "saleStartTime",
                    value: time,
                  })
                );
              }}
              data={times}
              searchable
            />

            <Select
              comboboxProps={{ zIndex: 10000 }}
              className="col-12 col-md-6"
              label="Select end time"
              leftSection={clockIcon}
              placeholder="Start Time"
              name="saleEndTime"
              value={formData.saleEndTime}
              onChange={(time) => {
                dispatch(
                  updateCreateEventField({
                    field: "saleEndTime",
                    value: time,
                  })
                );
              }}
              data={times}
              searchable
            />
          </div>
        </div>

        {/* <div className="buttonsFormatting">
            <button
              onClick={() =>
                dispatch(
                  updateCreateEventField({
                    field: "ticketType",
                    value: "",
                  })
                )
              }
            >
              Cancel
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default TicketDetailsInput;
