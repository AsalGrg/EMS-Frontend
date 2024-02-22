import React from "react";
import { useSelector } from "react-redux";
const EventCoverImage = () => {
  const formData = useSelector((state) => state.aboutEvent);

  return (
    <section className="mt-5">
      <div className="coverImageDisplayDiv rounded d-flex justify-content-center">
        {formData.eventAccessType === "preview" ? (
          <img
            src={URL.createObjectURL(formData.coverImage)}
            className="img-fluid rounded"
            style={{
              height: "100%",
            }}
          ></img>
        ) : (
          <img
            src={formData.coverImage}
            className="img-fluid rounded"
            style={{
              height: "100%",
            }}
          ></img>
        )}
      </div>
    </section>
  );
};

export default EventCoverImage;
