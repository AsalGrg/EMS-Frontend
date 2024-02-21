import { Card, Center, Text, TextInput } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCreateEventField,
  updateMatchedPlacesCreateEvent,
} from "../../../pages/create event/CreateEventSlice";
import getPlaces from "../../utilities/places";
import MatchedLocation from "./MatchedLocation";
import ShowMap from "./ShowMap";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const Location = () => {
  const selectedOptionStyle = {
    color: "#3659e3",
    borderColor: "blue",
    backgroundColor: "rgba(54,89,227,.1)",
  };

  const { values, touched, errors, handleChange } = useCreateEventContext();


  const handleLocationChange = (e) => {
    //to
    handleChange({
      target: {
        name: "selectedPlace",
        value: null,
      },
    });
    const searchText = e.target.value;
    getPlaces(searchText)
      .then((places) => {
        handleChange({
          target: {
            name: "matchedPlaces",
            value: places,
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
      });
  };


  function handleFormikChange(field, value) {
    handleChange({
      target: {
        name: field,
        value: value,
      },
    });
  }

  return (
    <>
      <div>
        <h1>Location</h1>
        <p>This is a basic info section</p>
      </div>

      <div className="row g-1 mb-2">
        <div
          className="border rounded col-md-2 col-10 me-md-3"
          style={
            values.venueType === "venue" ? selectedOptionStyle : null
          }
          onClick={() => handleFormikChange("venueType", "venue")}
        >
          <p className="">Venue</p>
        </div>

        <div
          className="col-10 col-md-2 rounded border"
          style={values.venueType === "online" ? selectedOptionStyle : null}
          onClick={() => handleFormikChange("venueType", "online")}
        >
          <p>Online</p>
        </div>
      </div>

      {touched.venueType && errors.venueType ? (
        <Text size="sm" c={"red"}>
          {errors.venueType}
        </Text>
      ) : null}

      {values.venueType === "venue" ? (
        <TextInput
          leftSectionPointerEvents="none"
          label="Event Venue"
          name="location"
          value={
            values.selectedPlace != null
              ? values.selectedPlace.display_name
              : values.location
          }
          onChange={(e) => {
            handleLocationChange(e);
            formik.handleChange(e);
          }}
          placeholder="Location"
          error={touched.selectedPlace && errors.selectedPlace}
        />
      ) : values.venueType === "online" ? (
        <TextInput
          leftSectionPointerEvents="none"
          label="URL"
          name="meetingLink"
          value={values.meetingLink}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="https://www.metting_link"
          error={touched.meetingLink && errors.meetingLink}
        />
      ) : null}

      {values.venueType === "venue" && values.matchedPlaces != null ? (
        <MatchedLocation />
      ) : null}

      {values.venueType === "venue" && values.selectedPlace != null ? (
        <ShowMap/>
      ) : null}
    </>
  );
};

export default Location;
