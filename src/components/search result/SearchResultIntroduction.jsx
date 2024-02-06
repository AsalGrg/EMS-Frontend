import { Text } from "@mantine/core";
import React from "react";
import { useParams } from "react-router";

const SearchResultIntroduction = () => {
  const { eventName, location } = useParams();
  return (
    <section className="mt-5 mb-5">
      <Text size="27px"  fw={700}>
        {eventName.charAt(0).toUpperCase() + eventName.slice(1)} events in{" "}
        {location}
      </Text>
    </section>
  );
};

export default SearchResultIntroduction;
