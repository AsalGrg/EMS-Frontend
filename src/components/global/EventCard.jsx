import { Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";
import formatDate from "../utilities/formatDate";
import formatTime from "../utilities/formatTime";
import { useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";

const EventCard = ({ event }) => {
  const naviagte = useNavigate();
  return (
    <Card
      radius="lg"
      className="cursor-pointer hoverShadow"
      onClick={() => naviagte(`/event/about/${event.eventId}`)}
    >
      <Card.Section
        style={{ height: "160px", overflow: "hidden" }}
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

      <Text fw={500} mt="sm" size="lg">
        {event.eventName}
      </Text>

      <Text size="sm" fw={500} c="dimmed">
        {formatDate(event.startDate) + " . " + formatTime(event.startTime)}
      </Text>

      <Text size="sm" fw={500} c="red" className="mt-1">
        {event.ticketType === "Free" ? "Free" : `From Rs ${event.ticketPrice}`}
      </Text>

      <Text size="sm" fw={500} className="mt-1">
        {event.organizerName}
      </Text>

      <Text size="sm" fw={500} className="d-flex mt-1">
      <FaRegUser className="me-2"/>
        {event.organizerFollowers} Followers
      </Text>
    </Card>
  );
};

export default EventCard;
