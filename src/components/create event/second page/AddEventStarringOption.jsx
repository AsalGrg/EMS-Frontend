import React from "react";
import { useDispatch } from "react-redux";
import { addStarringInput } from "../../../pages/create event/CreateEventSlice";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const AddEventStarringOption = ({ formik }) => {
  const { handleChange, values } = useCreateEventContext();

  const addStarring = () => {
    const newStarringList = [
      ...values.starrings,
      { id: Date.now(), starringPhoto: "", starringName: "", starringRole: "" },
    ];

    handleChange({
      target: {
        name: "starrings",
        value: newStarringList,
      },
    });
  };
  return (
    <div className="d-flex col-5 border justify-content-center align-items-center">
      <p onClick={addStarring}>Add Starring</p>
    </div>
  );
};

export default AddEventStarringOption;
