import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const ImageInput = () => {

  const {handleChange, touched, errors}= useCreateEventContext();

  const fileInputRef = useRef();
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    handleChange({
      target: {
        name: "coverImage",
        value: e.target.files[0],
      },
    });
    console.log("jwdjwjdwj")
    console.log(e.target.files[0])
  };

  return (
    <div
      className="imageDisplayDivCES rounded container d-flex"
      onClick={handleClick}
      style={touched.coverImage && errors.coverImage ? {border: "2px solid red"}: null}
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
