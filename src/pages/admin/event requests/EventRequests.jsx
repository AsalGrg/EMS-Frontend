import React, { useEffect } from "react";
import EventRequestsTable from "../../../components/admin/event requests/EventRequestsTable";
import { get_event_requests } from "../../../services/user details/admin/get_event_request";
import { useLoaderData } from "react-router";
import { useDispatch } from "react-redux";
import { updateRequests } from "./EventRequestsSlice";

const EventRequests = () => {
  document.title = 'Event Requests';
  const dispatch = useDispatch();
  const fetchedData = useLoaderData();

  useEffect(() => {
    if(fetchedData!=null){
      console.log("aayu")
      console.log(fetchedData)
      dispatch(updateRequests(fetchedData));
    }
  }, [])
  
  return (
    <section className="fonts p-5">

      <div className="d-flex justify-content-between flex-wrap">
        <h1 className="display-6 fw-bold">Events Requests</h1>
      </div>

      <div className="row justity-content-evenly mt-4 gy-3">

        <EventRequestsTable/>
      </div>
    </section>
  );
};

export default EventRequests;

export async function eventRequestsLoader(){
  let data;
  
  const res= await get_event_requests();
  if(res.ok){
    console.log("Here")
    data= await res.json();
  }else{
    console.log('here e')
  }
  return data
}
