import { List, ThemeIcon, rem } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconMapPinFilled,
} from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchBarState } from "../../pages/search/SearchBarSlice";

const MatchedLocation = ({ handleBlur }) => {
  const dispatch = useDispatch();
  const matchedLocationState = useSelector((state) => state.searchBar);

  function updateSelectedPlace(selectedPlace) {
     dispatch(
      updateSearchBarState({
        field: "selectedPlaces",
        value: selectedPlace,
      })
    );
  }

  return (
    <section>
      <List
        spacing="xs"
        size="lg"
        center
        icon={
          <ThemeIcon color="white" size={27} radius="xl">
            <IconMapPinFilled style={{ width: rem(18), height: rem(25) , color: "black"}} />
          </ThemeIcon>
        }
      >
        {matchedLocationState.matchedPlaces.map((eachLocation) => (
          <List.Item
            key={eachLocation.place_id}
            onClick={(e) => {
              e.stopPropagation();
              updateSelectedPlace(eachLocation);
              handleBlur();
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
