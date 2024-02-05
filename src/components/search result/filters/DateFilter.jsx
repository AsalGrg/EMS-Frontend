import { Checkbox, Text } from "@mantine/core";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import React, { useRef, useState } from "react";

const DateFilter = () => {
  const dateRef = useRef();
  const [openCalender, setopenCalender] = useState(false);
  return (
    <div className="mt-5">
      <Text size="sm" fw={600}>
        Date
      </Text>

      <div className="d-grid gap-3 mt-2">
        <Checkbox label="Today" />
        <Checkbox defaultChecked label="Tommorow" />
        <Checkbox defaultChecked label="This weekend" />
        <Checkbox defaultChecked label="This week" />
        <Checkbox defaultChecked label="This month" />
        <Checkbox defaultChecked label="Next month" />
        <Checkbox
          defaultChecked
          label="Pick a date"
          onClick={() => {
            setopenCalender((prev) => !prev);
            openCalender ? dateRef.current.click() : null;
          }}
        />
        {openCalender ? (
          <DatePicker
          popover
          // defaultDate={new Date(2015, 1)}
          // value={value}
          // onChange={setValue}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DateFilter;
