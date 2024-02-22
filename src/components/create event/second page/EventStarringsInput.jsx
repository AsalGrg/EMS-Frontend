import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStarringImage,
  changeStarringName,
  getStarringImageFile,
  removeEachStarring,
} from "../../../pages/create event/CreateEventSlice";
import { Button, Text, TextInput } from "@mantine/core";
import StarringImageDisplay from "./StarringImageDisplay";
import { IconRowRemove, IconTrash } from "@tabler/icons-react";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const EventStarringsInput = ({ eventStarring, index }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef();

  const { values, handleChange, errors, touched } = useCreateEventContext();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const changeImage = (e) => {
    if (e.target.files[0] != undefined) {
      const updatedList = values.starrings.map((obj) => {
        if (obj.id === eventStarring.id) {
          return { ...obj, starringPhoto: e.target.files[0] };
        }

        return obj;
      });
      handleChange({
        target: {
          name: "starrings",
          value: updatedList,
        },
      });
    }
  };

  const changeText = (e, feildName) => {
    const updatedList = values.starrings.map((obj) => {
      if (obj.id === eventStarring.id) {
        return { ...obj, [feildName]: e.target.value };
      }

      return obj;
    });

    handleChange({
      target: {
        name: "starrings",
        value: updatedList,
      },
    });
  };

  const removeStarringInput = () => {
    const updatedList = values.starrings.filter(
      (each) => each.id !== eventStarring.id
    );

    handleChange({
      target: {
        name: "starrings",
        value: updatedList,
      },
    });
  };

  return (
    <div
      className="d-flex justify-content-between flex-column"
      key={eventStarring.id}
      style={{
        width: "260px",
      }}
    >
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={changeImage}
        value={eventStarring.starringImage}
      />
      {!eventStarring.starringPhoto && (
        <div
          className="d-flex rounded container bg-secondary"
          onClick={handleClick}
          style={
            touched.starrings &&
            errors.starrings &&
            touched.starrings[index] &&
            errors.starrings[index]
              ? {
                  border: "1px solid red",
                  height: "350px",
                }
              : { height: "350px" }
          }
        >
          <div className="selectImageBtnDiv">
            <p>Upload Starring Photo</p>
          </div>
        </div>
      )}

      {eventStarring.starringPhoto && (
        <StarringImageDisplay
          eventStarring={eventStarring}
          handleChangeImage={handleClick}
        />
      )}

      {/* event starring errors */}
      {touched.starrings &&
      errors.starrings &&
      touched.starrings[index] &&
      errors.starrings[index] ? (
        <Text size="xs" c={"red"} >
          {errors.starrings[index].starringPhoto}
        </Text>
      ) : null}

      <TextInput
        leftSectionPointerEvents="none"
        label="Starring name"
        name="starringName"
        value={eventStarring.starringName}
        onChange={(e) => {
          changeText(e, "starringName");
        }}
        error={
          touched.starrings &&
          errors.starrings &&
          touched.starrings[index] &&
          errors.starrings[index]
            ? errors.starrings[index].starringName
            : false
        }
      />

      <Button
        className="rounded mt-2"
        color="red"
        leftSection={<IconTrash size={18} />}
        disabled={values.starrings.length === 1}
        onClick={removeStarringInput}
      >
        Delete
      </Button>
    </div>
  );
};

export default EventStarringsInput;
