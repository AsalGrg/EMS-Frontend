import { Badge, Text } from "@mantine/core";
import { IconChevronDown, IconEye } from "@tabler/icons-react";
import React from "react";
import formatDate from "../../utilities/formatDate";
import formatTime from "../../utilities/formatTime";
import { useDispatch, useSelector } from "react-redux";

const IntroductionSection = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.eventDescription);

  const basicEventDetails = formData.eventBasicDetails;

  return (
    <div className="d-flex justify-content-between mt-4 align-items-center">
      <div>
        <Text size="xl" fw={600}>
          {basicEventDetails.eventName}
        </Text>
        <Text size="md" c={"dimmed"}>
          {formatDate(basicEventDetails.startDate)}
        </Text>
      </div>

      <div className="d-flex gap-4">
        {basicEventDetails.eventStatus === "completed" ? (
          <Badge size="lg" rightSection={<IconChevronDown />} variant="light" color={"green"}>
            {basicEventDetails.eventStatus}
          </Badge>
        ) : (
          <Badge size="lg" rightSection={<IconChevronDown />} variant="light">
            {basicEventDetails.eventStatus}
          </Badge>
        )}

        <div className="d-flex gap-2">
          <IconEye />
          <Text>Preview Event</Text>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
