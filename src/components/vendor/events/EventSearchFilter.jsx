import { Select } from "@mantine/core";
import React, { useState } from "react";

const EventSearchFilter = ({selectedValue, setselectedValue}) => {

  return (
    <Select
      size="md"
      placeholder="Event filter"
      data={["Upcoming events", "Past events", "Draft", "Completed", "To be accepted","All events"]}
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
