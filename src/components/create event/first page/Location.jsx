import { Card, Center, TextInput } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";

const Location = () => {
  const selectedOptionStyle = {
    color: "#3659e3",
    borderColor: "blue",
    backgroundColor: "rgba(54,89,227,.1)",
  };

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.createEvent);

  return (
    <>
      <div>
        <h1>Location</h1>
        <p>This is a basic info section</p>
      </div>

      <div className="row g-1 mb-2">
        <div
          className="border rounded col-md-2 col-10 me-md-3"
          style={formData.venueType === "venue" ? selectedOptionStyle : null}
          onClick={() =>
            dispatch(
              updateCreateEventField({
                field: "venueType",
                value: "venue",
              })
            )
          }
        >
          <p className="">Venue</p>
        </div>

        <div
          className="col-10 col-md-2 rounded border"
          style={formData.venueType === "online" ? selectedOptionStyle : null}
          onClick={() =>
            dispatch(
              updateCreateEventField({
                field: "venueType",
                value: "online",
              })
            )
          }
        >
          <p>Online</p>
        </div>
      </div>

      {formData.venueType === "venue" ? (
        <TextInput
          leftSectionPointerEvents="none"
          label="Event Venue"
          name="eventTitle"
          value={formData.location}
          onChange={(e) => {
            dispatch(
              updateCreateEventField({
                field: "location",
                value: e.target.value,
              })
            );
          }}
          placeholder="Location"
        />
      ) : formData.venueType === "online" ? (
        <TextInput
          leftSectionPointerEvents="none"
          label="URL"
          name="eventTitle"
          value={formData.meetingLink}
          onChange={(e) => {
            dispatch(
              updateCreateEventField({
                field: "meetingLink",
                value: e.target.value,
              })
            );
          }}
          placeholder="https://www.metting_link"
        />
      ) : null}
    </>
  );
};

export default Location;
