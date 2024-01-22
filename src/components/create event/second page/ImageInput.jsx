import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";

const ImageInput = () => {
  const fileInputRef = useRef();

  const dispatch = useDispatch();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    dispatch(
      updateCreateEventField({
        field: "coverImage",
        value: e.target.files[0],
      })
    );
  };

  return (
      <div
        className="imageDisplayDivCES rounded container d-flex"
        onClick={handleClick}
      >
        <div className="selectImageBtnDiv">
          <p>Upload Cover Photo</p>
        </div>

        <input
          type="file"
          hidden
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>
  );
};

export default ImageInput;
