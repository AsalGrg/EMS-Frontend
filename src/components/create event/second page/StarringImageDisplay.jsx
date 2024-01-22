import { Button } from "@mantine/core";
import { IconPhotoCancel, IconPhotoEdit } from "@tabler/icons-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeStarringImage } from "../../../pages/create event/CreateEventSlice";

const StarringImageDisplay = ({ eventStarring, handleChangeImage }) => {
  const [btnHidden, setBntHidden] = useState(true);

  const dispatch = useDispatch();

  const deleteStarringImage = () => {
    dispatch(removeStarringImage(eventStarring.id));
  };
  return (
    <section
      className="d-flex"
    >
      <img
        src={URL.createObjectURL(eventStarring.starringPhoto)}
        className="starringImage border rounded cursor"
        onClick={() => {
          setBntHidden((prev) => !prev);
        }}
      />

      <div className="ms-1" hidden={btnHidden}>
        <Button
          variant="filled"
          color="violet"
          size="s"
          className="mb-1"
          onClick={() => handleChangeImage()}
        >
          <IconPhotoEdit size={16} />
        </Button>
        <Button
          variant="filled"
          color="red"
          size="s"
          className="mb-1"
          onClick={deleteStarringImage}
        >
          <IconPhotoCancel size={16} />
        </Button>
      </div>
    </section>
  );
};

export default StarringImageDisplay;
