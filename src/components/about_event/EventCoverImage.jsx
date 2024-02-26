import React from "react";
import { useSelector } from "react-redux";
const EventCoverImage = () => {
  const formData = useSelector((state) => state.aboutEvent);

  return (
    <section className="mt-5">
      <div className="coverImageDisplayDiv rounded d-flex justify-content-center bg-secondary px-lg-5"
      style={{
        maxHeight: "400px"
      }}
      >
        {formData.eventAccessType === "preview" ? (
          <img
            src={`data:image/png;base64,${formData.coverImage}`}
            className="img-fluid rounded mx-5"
            style={{
              objectFit: "contain"
            }}
          ></img>
        ) : (
          <img
            src={formData.coverImage}
            className="img-fluid rounded"
          ></img>
        )}
      </div>
    </section>
  );
};

export default EventCoverImage;
