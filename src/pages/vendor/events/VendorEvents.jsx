import React, { useEffect, useState } from "react";
import "../style.css";
import EventSearchbar from "../../../components/vendor/events/EventSearchbar";
import EventSearchFilter from "../../../components/vendor/events/EventSearchFilter";
import { Link, useLoaderData } from "react-router-dom";
import Events from "../../../components/vendor/events/Events";
import get_vendor_events from "../../../services/user/get_vendor_events";
import { isAfter, isBefore } from "date-fns";

const VendorEvents = () => {
  const intialEventState = [{
    eventId: 0,
    pageStatus: 0,
    eventStatus: "",
    eventCoverImgUrl:"",
    eventName: "",
    startDate: "",
    endDate: "",
    startTime: "",
    category: "",
    location_display_name:
      "",
    lat: 0.0,
    lon: 0.0,
    country: "",
    ticketType: "",
    ticketPrice: 0.0,
    ticketsForSale: 0,
    ticketsSold: 0,
    organizerName: "",
  }];

  const [events, setevents] = useState(intialEventState);
  const [searchedKeyword, setsearchedKeyword] = useState("");
  const [selectedSearchFilter, setSelectedSearchFilter] =
    useState("All events");

  const loaderData = useLoaderData();

  console.log(loaderData);
  console.log(events);

  useEffect(() => {
    if (loaderData) {
      console.log("Data received:", loaderData);
      if (Array.isArray(loaderData)) {
        setevents(loaderData);
      } else {
        console.error("loaderData is not an array:", loaderData);
      }
    } else {
      console.log("No data received yet.");
    }
  }, []);

  useEffect(() => {
    function applyFilters() {
      const keywordSearchfilteredEvents = applySearchedKeyword();
      const filteredEvents = applySearchFilter({ keywordFilteredEvents: keywordSearchfilteredEvents });
      setevents(filteredEvents);
    }
    applyFilters();
 }, [selectedSearchFilter, searchedKeyword]);

 function applySearchedKeyword() {
    const fetchedEvents = loaderData;

    if (searchedKeyword !== null && searchedKeyword.length > 0) {
      const filteredEvents = fetchedEvents.filter(
        (each) =>
          each.eventName.includes(searchedKeyword) ||
          each.category.includes(searchedKeyword)
      );
      return filteredEvents;
    }
    return fetchedEvents;
 }

 function applySearchFilter({ keywordFilteredEvents }) {
    let filteredEvents;
    if (selectedSearchFilter === "All events") {
      filteredEvents = keywordFilteredEvents;
    } else {
      if (selectedSearchFilter === "Upcoming events") {
        filteredEvents = keywordFilteredEvents.filter((each) =>
          isAfter(new Date(), new Date(each.startDate))
        );
      } else if (selectedSearchFilter === "Past events") {
        filteredEvents = keywordFilteredEvents.filter((each) =>
          isBefore(new Date(), new Date(each.startDate))
        );
      } else if (selectedSearchFilter === "Draft") {
        filteredEvents = keywordFilteredEvents.filter(
          (each) => each.eventStatus === "draft"
        );
      } else if (selectedSearchFilter === "Completed") {
        filteredEvents = keywordFilteredEvents.filter(
          (each) => each.eventStatus === "completed"
        );
      }
    }
    return filteredEvents;
 }

  return (
    <section>
      <h1 className="display-6 fw-bold">Events</h1>

      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex gap-4">
          <EventSearchbar  searchedKeyword={searchedKeyword} setsearchedKeyword={setsearchedKeyword}/>
          <EventSearchFilter selectedValue={selectedSearchFilter} setselectedValue={setSelectedSearchFilter}/>
        </div>

        <Link to={"/create-event"}>
          <button className="dashboard-btn-catchy">Create event</button>
        </Link>
      </div>

      <div>
        <Events events={events} />
      </div>
    </section>
  );
};

export default VendorEvents;

export async function vendorEventsLoader() {
  const res = await get_vendor_events();
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  }

  return null;
}
