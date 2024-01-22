import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStarringImage,
  changeStarringName,
  getStarringImageFile,
  removeEachStarring,
} from "../../../pages/create event/CreateEventSlice";
import { Button, TextInput } from "@mantine/core";
import StarringImageDisplay from "./StarringImageDisplay";
import { IconRowRemove, IconTrash } from "@tabler/icons-react";

const EventStarringsInput = ({ eventStarring }) => {
  console.log(eventStarring);
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.createEvent);
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const changeImage = (e) => {
    if (e.target.files[0] != undefined) {
      dispatch(
        changeStarringImage({
          id: eventStarring.id,
          changedImage: e.target.files[0],
        })
      );
    }
  };

  const removeStarringInput =()=>{
    dispatch(removeEachStarring(eventStarring.id));
  }

  return (
    <div
      className="d-flex justify-content-between flex-column"
      key={eventStarring.id}
      style={{
        width: "260px"
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
          style={{
            height: "350px",
          }}
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

      <TextInput
        leftSectionPointerEvents="none"
        label="Starring name"
        name="eventTitle"
        value={eventStarring.starringName}
        onChange={(e) => {
          dispatch(
            changeStarringName({
              id: eventStarring.id,
              changedName: e.target.value,
            })
          );
        }}
      />

      <Button className="rounded mt-2" color="red" leftSection={<IconTrash size={18}
      />} disabled={
        formState.starrings.length===1
      }
      onClick={removeStarringInput}
      >Delete</Button>
    </div>
  );
};

export default EventStarringsInput;
