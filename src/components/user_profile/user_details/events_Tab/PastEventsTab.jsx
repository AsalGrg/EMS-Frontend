import { Text } from "@mantine/core";
import React from "react";
import EachEvent from "./EachEvent";

const PastEventsTab = () => {
  return (
    <section className="container mt-4 px-5">
      <Text size="xl" fw={700}>
        Past Events
      </Text>

      <div className="row mt-1 gy-4">
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
        <EachEvent />
      </div>
    </section>
  );
};

export default PastEventsTab;
