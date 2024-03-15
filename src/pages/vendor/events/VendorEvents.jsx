import React from "react";
import "../style.css";
import EventSearchbar from "../../../components/vendor/events/EventSearchbar";
import EventSearchFilter from "../../../components/vendor/events/EventSearchFilter";
import { Link } from "react-router-dom";
import Events from "../../../components/vendor/events/Events";

const VendorEvents = () => {
  return (
    <section>
      <h1 className="display-6 fw-bold">Events</h1>

      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex gap-4">
          <EventSearchbar />
          <EventSearchFilter />
        </div>

        <Link to={"/create-event"}>
          <button className="dashboard-btn-catchy">Create event</button>
        </Link>
      </div>


      <div>
        <Events/>
      </div>
    </section>
  );
};

export default VendorEvents;
