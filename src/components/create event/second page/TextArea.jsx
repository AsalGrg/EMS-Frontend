import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const TextArea = () => {
  const { handleChange, values } = useCreateEventContext();

  const handleDoneEditing = (e) => {
    e.stopPropagation();

    handleChange({
      target: {
        name: "isAboutClicked",
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        defaultValue={values.aboutEvent}
        onChange={(value) => {
          handleChange({
            target: {
              name: "aboutEvent",
              value: value,
            },
          });
        }}
      />

      <div className="buttonsFormatting mb-3">
        <button onClick={handleDoneEditing} className="signButton">
          Done Editing
        </button>
      </div>
    </>
  );
};

export default TextArea;
