import React, { useState } from "react";
import "./DatePlaceSelector.css";
import PlaceSelector from "../utilities/placeSelector";
import DateSelector from "../utilities/DateSelector";
const DatePlaceSelector = ({setLocation, setDate, clearDateFilter}) => {


  return (
    <div className="mt-3 d-flex gap-3 align-items-center">
      <PlaceSelector setLocation={setLocation} />

      <DateSelector setDate={setDate} clearDateFilter={clearDateFilter}/>
    </div>
  );
};

export default DatePlaceSelector;
