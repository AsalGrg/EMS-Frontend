import React from "react";
import NoOrders from "../global/NoOrders";
import EachOrder from "./EachOrder";
import { useDispatch, useSelector } from "react-redux";

//accepts array of orders
const EventOrdersTable = ({orders}) => {


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
        {orders.map((each) => (
          <EachOrder order={each} />
        ))}
      </table>

      {orders.length=== 0 && (
        <NoOrders message={"No orders for the events"} />
      )}
    </>
  );
};

export default EventOrdersTable;
