import { Button, Card, Image, Text, rem } from "@mantine/core";
import { IconCircleX, IconUser } from "@tabler/icons-react";
import React from "react";
import EventCard from "../global/EventCard";

const EventSnippetsGridView = ({ events, forCollection, handleRemoveEventFromCollection }) => {
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
          <div key={each.id}>
            <EventCard event={each} />
            {forCollection && (
              <Button
                color="dark"
                variant={"outline"}
                size="xs"
                className="w-100 mt-2"
                leftSection={
                  <IconCircleX
                    style={{ height: rem(18), width: rem(18) }}
                    color="red"
                  />
                }
                onClick={()=> {

                  handleRemoveEventFromCollection(each.eventId)
                }}
              >Remove</Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSnippetsGridView;
