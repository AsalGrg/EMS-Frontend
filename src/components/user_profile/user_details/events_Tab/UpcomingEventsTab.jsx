import { Text } from "@mantine/core";
import React from "react";
import EachEvent from "./EachEvent";

const UpcomingEventsTab = () => {
  return (
    <section className="container mt-4 px-5">
      <Text size="xl" fw={700}>
        Upcoming Events
      </Text>

      <div className="row mt-1 gy-4">
        <EachEvent/>
        <EachEvent/>
        <EachEvent/>
        <EachEvent/>
        <EachEvent/>
      </div>
    </section>
  );
};

export default UpcomingEventsTab;
