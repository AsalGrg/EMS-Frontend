import React from "react";
import EachEventRequest from "./EachEventRequest";
import { useSelector } from "react-redux";
import NoOrders from "../../global/NoOrders";

const EventRequestsTable = () => {
  const requestsState = useSelector((state) => state.eventRequests);

  return (
    <div>
      <table className="eventTable w-100">
        <tr className="eventTable-headers">
          <th>Event Name</th>
          <th>Organizer Name</th>
          <th>Start date</th>
          <th>Location type</th>
          <th>Action</th>
        </tr>

        {requestsState.requests.map((each) => (
          <EachEventRequest request={each}/>
        ))}
      </table>

      {requestsState.requests.length === 0 && <NoOrders message={"No requests at the moment"} />}
    </div>
  );
};

export default EventRequestsTable;
