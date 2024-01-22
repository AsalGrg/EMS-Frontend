import { Select, TextInput, rem } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
// import { DateInput } from "@mantine/dates";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { times } from "../../utilities/times";

const DateAndTime = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.createEvent);

  const dateIcon = (
    <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  const clockIcon = (
    <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
  );

  const handleToggle = (e) => {
    const fieldValue = {
      field: e.target.name,
      value: !formState[e.target.name],
    };
    dispatch(updateCreateEventField(fieldValue));
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    // const fieldValue = {
    //   field: e.target.name,
    //   value: e.target.value,
    // };
    // dispatch(updateCreateEventField(fieldValue));
  };

  return (
    <>
      <div>
        <h1>Date and Time</h1>
        <p>This is a basic info section</p>
      </div>

      <div className="row mb-3">
        <DatePickerInput
          leftSection={dateIcon}
          className="col-12 col-md-6"
          type="range"
          label="Event dates"
          name="eventStartDate"
          placeholder="Start Date - End Date"
          value={formState.eventDates}
          onChange={(date) => {
            dispatch(
              updateCreateEventField({
                field: "eventDates",
                value: date,
              })
            );
          }}
        />

        <Select
          label="Select start time"
          leftSection={clockIcon}
          placeholder="Start Time"
          name="eventStartTime"
          className="col-6 col-md-3"
          value={formState.eventStartTime}
          onChange={(time) => {
            dispatch(
              updateCreateEventField({
                field: "eventStartTime",
                value: time,
              })
            );
          }}
          data={times}
          searchable
        />

        <Select
          label="Select start time"
          leftSection={clockIcon}
          placeholder="Start Time"
          name="eventStartTime"
          className="col-6 col-md-3"
          value={formState.eventEndTime}
          onChange={(time) => {
            dispatch(
              updateCreateEventField({
                field: "eventEndTime",
                value: time,
              })
            );
          }}
          data={times}
          searchable
        />
      </div>

      <div className="d-flex align-items-center justify-content-start">
        <input
          type="checkbox"
          name="displayStartTime"
          className="me-3"
          checked={formState.displayStartTime}
          onChange={handleToggle}
        />

        <div>
          <p>
            Display Start Time <br /> The start time of your event will be shown
            to the attendees
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-start">
        <input
          type="checkbox"
          name="displayEndTime"
          className="me-3"
          checked={formState.displayEndTime}
          onChange={handleToggle}
        />

        <div>
          <p>
            Display End Time <br /> The end time of your event will be shown
            to the attendees
          </p>
        </div>
      </div>
    </>
  );
};

export default DateAndTime;
