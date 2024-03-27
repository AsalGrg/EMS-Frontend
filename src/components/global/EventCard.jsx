import { Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import formatDate from "../utilities/formatDate";
import formatTime from "../utilities/formatTime";
import { useNavigate } from "react-router";

const EventCard = ({ event }) => {

  const naviagte = useNavigate();
  return (
    <Card shadow="sm" radius="md" withBorder
    className="cursor-pointer"

    onClick={()=> naviagte(`event/about/${event.eventId}`)}
    >
      
      <Card.Section style={{ height: "180px", overflow: "hidden" }}
      className="bg-primary"
      >
        {" "}
        {/* Set a fixed height for image container */}
        <Image
          src={event.eventCoverImgUrl}
          alt="Norway"
          className="w-100 h-100" /* Ensure the image takes up the full width */
        />
      </Card.Section>

      <Text fw={600} mt="sm" size="lg">
        {event.eventName}
      </Text>

      <Text size="md" fw={500} c="dimmed" mt="sm">
        {formatDate(event.startDate) + " . " + formatTime(event.startTime)}
      </Text>

      <Text size="md" fw={500} c="red" mt="sm">
        {event.ticketType === "Free" ? "Free" : $`From Rs ${event.ticketPrice}`}
      </Text>

      <Text size="md" fw={500} mt="sm">
        {event.organizerName}
      </Text>

      <Text size="md" mt="sm" fw={500} right={<IconUser />}>
        From $0.00
      </Text>
    </Card>
  );
};

export default EventCard;
