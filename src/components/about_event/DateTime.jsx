import { IconCalendarClock } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";
import formatDate from "../../components/utilities/formatDate";
import formatTime from "../../components/utilities/formatTime";
import { useParams } from "react-router";

const DateTime = () => {
  const { pageAccessType } = useParams();
  const formData = useSelector((state) => state.aboutEvent);

  return (
    <section className="mb-4">
      {pageAccessType !== "preview" && (
        <>
          <h4 className="fw-bold mb-3">Date and Time</h4>

          <div className="d-flex">
            <IconCalendarClock size={20} className="me-3" />
            <p className="">
              {formatDate(formData.eventStartDate)}
              {formatTime(formData.eventStartTime)} -{" "}
              {formatDate(formData.eventEndDate)}
              {formatTime(formData.eventEndTime)}
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default DateTime;
