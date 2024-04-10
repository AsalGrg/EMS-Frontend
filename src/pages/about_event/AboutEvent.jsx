import React, { useEffect } from "react";
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
import { useLoaderData, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateEntireStateAboutEvent } from "./AboutEventSlice";
import get_event_data from "../../services/about_event/get_event_data";

const AboutEvent = () => {

  const formData = useSelector((state) => state.aboutEvent);
  const dispatch = useDispatch();

  document.title = formData.eventTitle;
  const data = useLoaderData();

  console.log(data);

  useEffect(() => {
    if (data != null) {
      dispatch(updateEntireStateAboutEvent(data));
    }
  }, []);

  return (
    <div className="fonts">
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
    </div>
  );
};

export async function aboutEventLoader({ params }) {
  const pageAccessType = params.pageAccessType;
  const eventId = params.id;

  let data=null;
  if (pageAccessType === "preview") {
    console.log("hehhehe");
    data = JSON.parse(localStorage.getItem("previewEventData"));
    // dispatch(updateEntireStateAboutEvent(jsonData));
  } else if (pageAccessType === "about") {
    const password =
      localStorage.getItem("privateEvent") === eventId
        ? localStorage.getItem("password")
        : "";
    const res = await get_event_data(eventId, password);
    if (res.ok) {
      const fetchedData = await res.json();
      localStorage.removeItem("privateEvent");
      localStorage.removeItem("password");
      data = fetchedData;
    } else if (res.status === 401) {
      localStorage.setItem("privateEvent", eventId);
      return (window.location.href = `/accessPassword`);
    }
  }

  return data;
}
export default AboutEvent;
