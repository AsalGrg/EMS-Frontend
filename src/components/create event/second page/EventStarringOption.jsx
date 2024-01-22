import { Switch, rem, useMantineTheme } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import EventStarringsInput from "./EventStarringsInput";
import AddEventStarringOption from "./AddEventStarringOption";

const EventStarringOption = () => {
  const theme = useMantineTheme();
  const formData = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();

  const handleEventStarringToggle = () => {
    dispatch(
      updateCreateEventField({
        field: "hasStarring",
        value: !formData.hasStarring,
      })
    );
  };

  return (
    <section className="my-3">
      <Switch
        checked={formData.hasStarring}
        name="hasStarring"
        // onChange={(event) => setChecked(event.currentTarget.checked)}
        onChange={handleEventStarringToggle}
        color="teal"
        size="md"
        label="Want to add event starrings?"
        thumbIcon={
          formData.hasStarring ? (
            <IconCheck
              style={{ width: rem(12), height: rem(12) }}
              color={theme.colors.teal[6]}
              stroke={3}
            />
          ) : (
            <IconX
              style={{ width: rem(12), height: rem(12) }}
              color={theme.colors.red[6]}
              stroke={3}
            />
          )
        }
      />

      {formData.hasStarring ? (
        <div className="row mt-4 mx-1 justify-content-between">
          {formData.starrings.map((eachStarring) => (
            <div className="col-md-5 col-12 mb-3 d-flex justify-content-center">
              <EventStarringsInput eventStarring={eachStarring} />
            </div>
          ))}

          <AddEventStarringOption />
        </div>
      ) : null}
    </section>
  );
};

export default EventStarringOption;
