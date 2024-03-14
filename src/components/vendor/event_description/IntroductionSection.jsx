import { Badge, Text } from "@mantine/core";
import { IconChevronDown, IconEye } from "@tabler/icons-react";
import React from "react";

const IntroductionSection = () => {
  return (
    <div className="d-flex justify-content-between mt-4 align-items-center">
      <div>
        <Text size="xl" fw={600}>
          Event Name
        </Text>
        <Text size="md" c={"dimmed"}>
          Mon Jan 2, 2023
        </Text>
      </div>

      <div className="d-flex gap-4">
        <Badge size="lg" rightSection={<IconChevronDown />} variant="light">
          Draft
        </Badge>

        <div className="d-flex gap-2">
          <IconEye />
          <Text>Preview Event</Text>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
