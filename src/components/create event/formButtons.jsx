import React from "react";
import { useDispatch, useSelector } from "react-redux";
import create_event from "../../services/create event/create_event";
import {
  decreaseActive,
  increaseActive,
} from "../../pages/create event/CreateEventSlice";
import { useCreateEventContext } from "../../context/CreateEventContext";

const FormButtons = ({ handleSubmit, handleDraft, handlePreviousBtn}) => {
  const { active } = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  
  return (
    <div className="d-flex justify-content-between mt-4">
      <button
        disabled={active === 0}
        className="signButton"
        onClick={handlePreviousBtn}
      >
        Previous
      </button>

      <div className="d-flex gap-2">
        {active > 0 ? (
          <button
            className="signButton"
            type="submit"
            onClick={handleDraft}
          >
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
        ) : null}

        <button
          className="signButton"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
            setSubmitType("next");
          }}
        >
          {active !== 3 ? "Next" : "Publish"}
        </button>
      </div>
    </div>
  );
};

export default FormButtons;
