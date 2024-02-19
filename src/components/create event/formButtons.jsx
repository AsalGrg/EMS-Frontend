import React from "react";
import { useDispatch, useSelector } from "react-redux";
import create_event from "../../services/create event/create_event";
import {
  decreaseActive,
  increaseActive,
} from "../../pages/create event/CreateEventSlice";

const FormButtons = ({handleSubmit}) => {
  const { active, hasStarring, starrings } = useSelector(
    (state) => state.createEvent
  );
  const dispatch = useDispatch();

  function checkStarringFields() {
    if (hasStarring) {
      starrings.forEach((eachStarring) => {
        if (eachStarring.starringName === "") {
          toast.error("Starring name cannot be empty");
          return false;
        } else if (eachStarring.starringPhoto === "") {
          toast.error("Starring photo cannot be empty");
          return false;
        }
      });

      return true;
    } else {
      return true;
    }
  }
  const handlePublishBtn = async () => {
    let isStarringFieldValid = checkStarringFields();

    if (isStarringFieldValid) {
      const res = await create_event(formDataLogic(formData));
      // const res= await create_event();
      const data = await res.json();

      // console.log( formDataLogic({ formState: formData }))

      console.log(data);
    }
  };

  const handleNextBtn= ()=>{
    dispatch(increaseActive())
  }

  const handlePreviousBtn= ()=>{
    dispatch(decreaseActive())
  }
  return (
    <div className="d-flex justify-content-between mt-4">
      <button
        disabled={active === 0}
        className="signButton"
        onClick={handlePreviousBtn}
      >
        Previous
      </button>

      {active !== 3 ? (
        <button
          className="signButton"
          type="submit"
          onClick={handleSubmit}
        >
          Next
        </button>
      ) : (
        <button className="signButton" onClick={handlePublishBtn}>
          Publish
        </button>
      )}
    </div>
  );
};

export default FormButtons;
