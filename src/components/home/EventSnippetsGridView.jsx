import { Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import EventCard from "../global/EventCard";

const EventSnippetsGridView = ({ events }) => {
  return (
    <section className="mt-4">
      <div
        className=" gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {events.map((each) => (
          <EventCard  event={each}/>
        ))}
      </div>
    </section>
  );
};

export default EventSnippetsGridView;
