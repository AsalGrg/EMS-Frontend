import React from "react";
import NoOrders from "../global/NoOrders";
import EachOrder from "./EachOrder";

//accepts array of orders
const EventOrdersTable = () => {
  return (
    <>
      <table className="eventTable w-100">
        <tr className="eventTable-headers">
          <th>Order#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Date</th>
        </tr>

        <EachOrder/>
      </table>

      <NoOrders message={"No orders for the events"} />
    </>
  );
};

export default EventOrdersTable;
