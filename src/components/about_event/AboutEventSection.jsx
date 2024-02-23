import { IconHourglassHigh } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";

const AboutEventSection = () => {
  const formData = useSelector((state) => state.aboutEvent);
  return (
    <section className="mb-5">
      <h4 className="fw-bold mb-3">About Event</h4>

      {/* event duration icons */}
      <div className="d-flex">
        <div className="d-flex me-5">
          <IconHourglassHigh size={20} className="me-3" />
          <p>2hr 24mins</p>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: formData.aboutEvent }}></div>
    </section>
  );
};

export default AboutEventSection;
