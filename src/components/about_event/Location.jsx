import {
  IconBrandYoutube,
  IconChevronDown,
  IconCurrentLocation,
} from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";
import ShowMap from "./ShowMap";

const Location = () => {
  const formData = useSelector((state) => state.aboutEvent);

  return (
    <section className="mb-4">
      <h4 className="fw-bold mb-3">Location</h4>

      {/* for online */}
      {formData.locationType === "online" ? (
        <div className="d-flex">
          <IconBrandYoutube size={20} className="me-3" />
          <p>Online</p>
        </div>
      ) : formData.locationType === "venue" ? (
        <div className="d-flex">
          <IconCurrentLocation size={20} className="me-3" />

          <div>
            <p className="mb-none">
              {formData.physicalLocationDetails.display_name}
            </p>
            <ShowMap />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Location;
