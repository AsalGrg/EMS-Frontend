import React from "react";
import { useSelector } from "react-redux";

const PreviewEvent = () => {
  const formData = useSelector((state) => state.createEvent);
  return (
    <div className="row shadow rounded">
      <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        <div>
          {!formData.coverImage ? (
            <p>SVG HERE</p>
          ) : (
            <img
              src={URL.createObjectURL(formData.coverImage)}
              className="defaultImage"
            />
          )}
        </div>
      </div>
      <div className="col-md-6 col-12 pt-2">
        <h5 className="mb-2">
          {formData.eventTitle ? formData.eventTitle : "Event Title"}
        </h5>

        {/* <p>Monday, January 22, 2024 at 7:00 PM +0545</p> */}
        <p className="mb-2">
          {formData.eventDates[0] != null || formData.eventStartTime != null
            ? `${
                formData.eventDates[0]
                  ? String(formData.eventDates[0]).substring(0, 16)
                  : ""
              } ${
                formData.eventStartTime ? "at " + formData.eventStartTime : ""
              }`
            : "Event Date"}
        </p>
        <div
          className="previewAddtionalDetails"
          style={{ display: "flex", columnGap: "30px" }}
        >
          <div className="ticketPriceContainer">
            <p>
              <i class="fa-solid fa-ticket"></i>
            </p>
            <p>
              {formData.ticketPrice !== null
                ? "Rs " + formData.ticketPrice
                : "--"}
            </p>
          </div>

          <div className="ticketPriceContainer">
            <p>
              <i class="fa-regular fa-user"></i>
            </p>
            <p>
              {formData.ticketQuantity !== null
                ? formData.ticketQuantity
                : "--"}
            </p>
          </div>
        </div>

        <div className="previewEventOption">
          <p>This may contain a preview event link</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewEvent;
