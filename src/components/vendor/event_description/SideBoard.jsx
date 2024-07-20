import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utilities/formatDate";
import { Affix, Badge, Text, rem } from "@mantine/core";
import { IconChevronDown, IconEye } from "@tabler/icons-react";

const SideBoard = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.eventDescription);

  const basicEventDetails = formData.eventBasicDetails;

  return (
    <div
      className="col-3 pt-3 d-flex flex-column gap-4"
      style={{
        backgroundColor: "#F8F7FA",
      }}
    >
      <div className="">
        {basicEventDetails.eventStatus === "completed" ? (
          <Badge
            size="lg"
            rightSection={<IconChevronDown />}
            variant="light"
            color={"green"}
          >
            {basicEventDetails.eventStatus}
          </Badge>
        ) : (
          <Badge size="lg" rightSection={<IconChevronDown />} variant="light">
            {basicEventDetails.eventStatus}
          </Badge>
        )}
      </div>

      <div className="d-flex flex-column gap-2">
        <div>
          <Text size="xl" fw={600}>
            {basicEventDetails.eventName}
          </Text>
          <Text size="md" c={"dimmed"}>
            {formatDate(basicEventDetails.startDate)}
          </Text>
        </div>

        {/* <div className="d-flex gap-2 align-items-center text-primary">
          <IconEye
            style={{
              height: rem(18),
              width: rem(18),
            }}
          />
          <Text size="sm">Preview Event</Text>
        </div> */}
      </div>
    </div>
  );
};

export default SideBoard;
