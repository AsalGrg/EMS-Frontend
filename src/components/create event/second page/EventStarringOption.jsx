import { Switch, rem, useMantineTheme } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import React from "react";
import EventStarringsInput from "./EventStarringsInput";
import AddEventStarringOption from "./AddEventStarringOption";
import { useCreateEventContext } from "../../../context/CreateEventContext";

const EventStarringOption = () => {
  const theme = useMantineTheme();
  const { handleChange, errors, touched, values } = useCreateEventContext();

  const handleEventStarringToggle = () => {
    handleChange({
      target: {
        name: "hasStarring",
        value: !values.hasStarring,
      },
    });
  };

  return (
    <section className="my-3">
      <Switch
        checked={values.hasStarring}
        name="hasStarring"
        // onChange={(event) => setChecked(event.currentTarget.checked)}
        onChange={handleEventStarringToggle}
        color="teal"
        size="md"
        label="Want to add event starrings?"
        thumbIcon={
          values.hasStarring ? (
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

      {values.hasStarring ? (
        <div className="row mt-4 mx-1 justify-content-between">
          {values.starrings.map((eachStarring, index) => (
            <div className="col-md-5 col-12 mb-3 d-flex justify-content-center"
            key={eachStarring.id}>
              <EventStarringsInput eventStarring={eachStarring} index={index}/>
            </div>
          ))}

          {values.starrings.length <= 4 ? <AddEventStarringOption /> : null}
        </div>
      ) : null}

      {touched.starrings && errors.starrings
        ? console.log(errors.starrings)
        : null}
    </section>
  );
};

export default EventStarringOption;
