import { Badge, Text } from "@mantine/core";
import { IconChevronDown, IconDropletDown, IconEye } from "@tabler/icons-react";
import React, { useEffect } from "react";
import IntroductionSection from "../../../components/vendor/event_description/IntroductionSection";
import TodosAndAnalysis from "../../../components/vendor/event_description/TodosAndAnalysis";
import ShareEventSection from "../../../components/vendor/event_description/ShareEventSection";
import EventOrdersSection from "../../../components/vendor/event_description/EventOrdersSection";
import get_user_event_internal_description from "../../../services/user/get_user_event_internal_description";
import { useLoaderData } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateEntireEventDesriptionState } from "./EventDescriptionSlice";

const EventDescription = () => {

  const loaderData = useLoaderData();

  const dispatch = useDispatch();
  const formData = useSelector(state=> state.eventDescription)
  
  useEffect(() => {
    dispatch(updateEntireEventDesriptionState(loaderData))
  }, [])
  
  return (
    <section>
      <h1 className="display-6 fw-bold">Dashboard</h1>
      <IntroductionSection />

      <TodosAndAnalysis/>

      <ShareEventSection/>

      <EventOrdersSection/>
    </section>
  );
};

export default EventDescription;

export async function eventDescriptionLoader({params}){
  const {eventId}= params;
  
  const res = await get_user_event_internal_description(eventId);

  if(res.ok){
    const data = await res.json();
    return data;
  }
  return null;
}
