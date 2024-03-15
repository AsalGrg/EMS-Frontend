import { Text } from "@mantine/core";
import React from "react";
import NoOrders from "../../global/NoOrders";
import EachOrder from "../EachOrder";
import EventOrdersTable from "../EventOrdersTable";

const EventOrdersSection = () => {
  return (
    <div className="mt-5 row">
      <Text size="xl" fw={600}>
        Orders
      </Text>

      <div className="row mt-4">
        <div className="col-12 col-lg-10">
          <EventOrdersTable />
        </div>
      </div>
    </div>
  );
};

export default EventOrdersSection;
