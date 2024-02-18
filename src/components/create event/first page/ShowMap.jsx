import { Text } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState } from "react";
import Map from "../../utilities/Map";
import { useDispatch, useSelector } from "react-redux";
import { popup } from "leaflet";

const ShowMap = () => {
  const [isShowing, setisShowing] = useState(false);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.createEvent);

  return (
    <section className="mt-3">
      <Text
        size="sm"
        fw={500}
        c={"blue"}
        onClick={() => {
          setisShowing((prev) => !prev);
        }}
      >
        Show Map {isShowing ? <IconChevronUp /> : <IconChevronDown />}
      </Text>

      {isShowing ? (
        <div
          className="mt-2 w-100"
          style={{
            height: "200px",
          }}
        >
          <Map
            geoCode={[formData.selectedPlace.lat, formData.selectedPlace.lon]}
            popup={formData.selectedPlace.display_name}
          />
        </div>
      ) : null}
    </section>
  );
};

export default ShowMap;
