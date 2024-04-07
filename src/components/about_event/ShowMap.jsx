import { useState } from "react";
import { useSelector } from "react-redux";
import Map from "../utilities/Map";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { Text } from "@mantine/core";

const ShowMap = () => {
  const [isShowing, setisShowing] = useState(false);

  const values = useSelector(state=> state.aboutEvent).physicalLocationDetails
  return (
    <section className="mt-1">
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
            geoCode={[values.lat, values.lon]}
            popup={values.display_name}
          />
        </div>
      ) : null}
    </section>
  );
};
export default ShowMap;
