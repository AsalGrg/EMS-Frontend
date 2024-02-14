import { Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const Navlinks = () => {
  return (
    <>
      <div className="col-5 justify-content-start gap-4 align-items-center d-none d-lg-flex">
        <Text size="md" fw={500}>
          Create Event
        </Text>

        <Text size="md" fw={500}>
          Find Vendor
        </Text>

        <Text size="md" fw={500}>
          Browse Event
        </Text>
      </div>
    </>
  );
};

export default Navlinks;
