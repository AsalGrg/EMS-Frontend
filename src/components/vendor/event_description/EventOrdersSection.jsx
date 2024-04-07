import { Text } from "@mantine/core";
import React from "react";
import NoOrders from "../../global/NoOrders";
import EachOrder from "../EachOrder";
import EventOrdersTable from "../EventOrdersTable";
import { useDispatch, useSelector } from "react-redux";

const EventOrdersSection = () => {

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.eventDescription);

  const eventOrderDetails = formData.eventOrders;

  return (
    <div className="mt-5 row">
      <Text size="xl" fw={600}>
        Orders
      </Text>

      <div className="row mt-4">
        <div className="col-12">
          <EventOrdersTable orders={eventOrderDetails}/>
        </div>
      </div>
    </div>
  );
};

export default EventOrdersSection;
