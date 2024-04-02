import React from "react";
import EachEvent from "./EachEvent";
import NoOrders from "../../global/NoOrders";

const Events = ({ events }) => {
  return (
    <section className="mt-4 w-100">
      <table
        className="eventTable"
        style={{
          width: "100%",
        }}
      >
        <tr className="eventTable-headers">
          <th className="">Event</th>
          <th className="w-25">Sold</th>
          <th>Gross</th>
          <th className="d-none d-xl-table-cell">Status</th>
          <th></th>
        </tr>

        {events.length > 0
          ? events.map((each) => <EachEvent event={each} />)
          : null}
      </table>
      {events.length === 0 && <NoOrders message={"No events"} />}
    </section>
  );
};

export default Events;
