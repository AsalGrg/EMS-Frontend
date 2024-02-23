import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EventCoverImage from "../../components/about_event/EventCoverImage";
import "../../components/about_event/aboutEvent.css";
import FirstSection from "../../components/about_event/first section/FirstSection";
import DateTime from "../../components/about_event/DateTime";
import Location from "../../components/about_event/Location";
import AboutEventSection from "../../components/about_event/AboutEventSection";
import StarringSection from "../../components/about_event/starring section/StarringSection";
import TicketSection from "../../components/about_event/first section/TicketSection";
import OrganizerDetailsSection from "../../components/about_event/OrganizerDetailsSection";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateEntireStateAboutEvent } from "./AboutEventSlice";

const AboutEvent = () => {
  const formData = useSelector((state) => state.aboutEvent);
  return (
    <>
      {/* main section starts here */}
      <main className="container px-5">
        <EventCoverImage />

        <div className="row justify-content-between mt-5">
          <div className="col-7">
            <FirstSection />

            <DateTime />

            <Location />

            <AboutEventSection />
          </div>

          <div className="col-4">
            <TicketSection />
          </div>
        </div>
      </main>

      {formData.hasStarring ? <StarringSection /> : null}

      <OrganizerDetailsSection />
    </>
  );
};

export function aboutEventLoader({ params }) {
  const dispatch = useDispatch();
  const pageAccessType = params.pageAccessType;

  if (pageAccessType === "preview") {
    console.log("hehhehe");
    const jsonData = JSON.parse(localStorage.getItem("previewEventData"));
    dispatch(updateEntireStateAboutEvent(jsonData));
  }

  return null;
}
export default AboutEvent;
