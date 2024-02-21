import React from "react";
import { useSelector } from "react-redux";

const DisplayCoverImage = ({ imageFile }) => {
  const formData = useSelector((state) => state.createEvent);

  return (
    <section>
      <div class="aspect-ratio-container shadow-sm">
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Event Image"
          className="rounded border img-fluid"
        />
      </div>
    </section>
  );
};

export default DisplayCoverImage;
