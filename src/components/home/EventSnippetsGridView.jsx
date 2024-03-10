import { Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import EventCard from "../global/EventCard";

const EventSnippetsGridView = () => {
  return (
    <section>
      <div
        className=" gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default EventSnippetsGridView;
