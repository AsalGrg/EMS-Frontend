import { Select } from "@mantine/core";
import React, { useState } from "react";

const EventSearchFilter = () => {
  const [selectedValue, setselectedValue] = useState("Upcoming events");
  return (
    <Select
      size="md"
      placeholder="Event filter"
      data={["Upcoming events", "Past events", "Draft", "All events"]}
      defaultValue="React"
      allowDeselect={false}
      value={selectedValue}
      style={{
        width: "180px",
      }}
      onChange={(data) => {
        setselectedValue(data);
      }}
    />
  );
};

export default EventSearchFilter;
