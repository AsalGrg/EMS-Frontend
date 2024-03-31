import { Text } from "@mantine/core";
import React from "react";
import { useParams } from "react-router";
import capitalizeWord from "../utilities/capitalizeWord";

const SearchResultIntroduction = () => {
  const { eventName, location } = useParams();


  const parts = eventName.split("--")
  const searchKeyword = parts[0];

  return (
    <section className="mt-5 mb-5 px-3">
      {eventName.includes("--") ? (
        <Text size="27px" fw={700}>
          {capitalizeWord(searchKeyword)} events in {location}
        </Text>
      ) : (
        <Text size="27px" fw={700}>
          {capitalizeWord(eventName)} events in {location}
        </Text>
      )}
    </section>
  );
};

export default SearchResultIntroduction;
