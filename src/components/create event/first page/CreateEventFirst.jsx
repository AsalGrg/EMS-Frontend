import React from "react";
import BasicInfo from "./BasicInfo";
import Location from "./Location";
import DateAndTime from "./DateAndTime";

const CreateEventFirst = () => {
  return (
    <>
      <div className="mb-3">
        <BasicInfo />
      </div>

      <div className="mb-3">
        <Location />
      </div>

      <div className="mb-3">
        <DateAndTime/>
      </div>
    </>
  );
};

export default CreateEventFirst;
