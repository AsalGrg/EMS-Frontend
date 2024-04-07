import React, { useEffect, useState } from "react";
import CategoryIntroduction from "../../components/category/CategoryIntroduction";
import DatePlaceSelector from "../../components/category/DatePlaceSelector";
import EventSnippetsCourselView from "../../components/global/EventSnippetsCourselView";
import EventTimeOptions from "../../components/category/EventTimeOptions";
import VendorSnippets from "../../components/global/VendorSnippets";
import { useParams } from "react-router";
import get_category_events from "../../services/get_category_events";
import { useDispatch, useSelector } from "react-redux";
import { filterCategoryEventsByDate, undoCategoryEventsDateFilter, updateEntireCategoryState } from "./CategorySlice";
import { isAfter } from "date-fns";
import { Title } from "@mantine/core";
import NoEventsBanner from "../../components/global/NoEventsBanner";

const Category = () => {
  const { catName } = useParams();
  const dispatch = useDispatch();
  const formData = useSelector(state=> state.category)
  const [location, setLocation] = useState();
  const [date, setdate] = useState()

  const events = useSelector((state) => state.category).filteredEvents;
  const vendors = useSelector((state) => state.category).vendors;

  console.log("From cat")
  console.log(vendors)
  const [popularEvents, setpopularEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [freeEvents, setfreeEvents] = useState([]);

  useEffect(() => {
    async function getCategoryEvents() {
      const res = await get_category_events(catName, location);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(updateEntireCategoryState({ data }));
      }
    }
    getCategoryEvents();
  }, [location]);

  useEffect(() => {
    console.log("changed")
    console.log(formData)
  }, [formData])
  

  useEffect(() => {
    console.log(vendors);
    filterUpcomingEvents(events);
    filterFreeEvents(events);
  }, [events]);

  useEffect(() => {
    console.log("hereee")
    function filterDate(){
      dispatch(filterCategoryEventsByDate(date))
    }
    filterDate();
  }, [date])
  

  function filterUpcomingEvents(events) {
    const upcomingEvents = events.filter((each) =>
      isAfter(new Date(each.startDate), new Date())
    );
    setUpcomingEvents(upcomingEvents);
  }

  function filterFreeEvents(events) {
    const upcomingEvents = events.filter((each) => each.ticketType === "Free");
    setfreeEvents(upcomingEvents);
  }

  function clearDateFilter(){
    dispatch(undoCategoryEventsDateFilter())
  }

  return (
    <main className="fonts">
      <CategoryIntroduction />

      <div className="container">
        <DatePlaceSelector setLocation={setLocation} setDate={setdate} clearDateFilter={clearDateFilter}/>

        {events.length >0?(
          <>
          {upcomingEvents.length > 0 && (
            <div className="mt-5">
              <Title order={3}>Upcoming Events</Title>
              <EventSnippetsCourselView events={upcomingEvents} />
            </div>
          )}

          <VendorSnippets vendors={vendors} />

          {freeEvents.length > 0 && (
            <div className="mt-5">
              <Title order={5}>Free Events</Title>
              <EventSnippetsCourselView events={freeEvents} />
            </div>
          )}
          <EventTimeOptions categoryTitle={catName} location={location}/>
        </>
        ):(
          <NoEventsBanner/>
        )}
      </div>
    </main>
  );
};

export default Category;
