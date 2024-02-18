import { List, ThemeIcon, rem } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import { IconMapPinFilled } from "@tabler/icons-react";

const MatchedLocation = ({ handleBlur }) => {
  const dispatch = useDispatch();
  const matchedLocationState = useSelector((state) => state.createEvent);

  function updateSelectedPlace(selectedPlace) {
    dispatch(
      updateCreateEventField({
        field: "selectedPlace",
        value: selectedPlace,
      })
    );

    dispatch(
      updateCreateEventField({
        field: "matchedPlaces",
        value: null,
      })
    );
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
        {matchedLocationState.matchedPlaces.map((eachLocation) => (
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
