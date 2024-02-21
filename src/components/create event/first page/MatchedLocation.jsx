import { List, ThemeIcon, rem } from "@mantine/core";
import React from "react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const MatchedLocation = () => {
  const { handleChange, values, errors } = useCreateEventContext();

  function updateSelectedPlace(selectedPlace) {
    handleChange({
      target: {
        name: "selectedPlace",
        value: selectedPlace,
      },
    });

    handleChange({
      target: {
        name: "matchedPlaces",
        value: null,
      },
    });
  }

  return (
    <section className="mt-3 mb-4">
      <List
        spacing="xs"
        size="lg"
        center
        icon={
          <ThemeIcon color="white" size={27} radius="xl">
            <IconMapPinFilled
              style={{ width: rem(18), height: rem(25), color: "black" }}
            />
          </ThemeIcon>
        }
      >
        {values.matchedPlaces.map((eachLocation) => (
          <List.Item
            key={eachLocation.place_id}
            onClick={(e) => {
              e.stopPropagation();
              updateSelectedPlace(eachLocation);
            }}
          >
            {eachLocation.display_name}
          </List.Item>
        ))}
      </List>
    </section>
  );
};

export default MatchedLocation;
