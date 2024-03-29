import { Checkbox, Text } from "@mantine/core";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilters,
} from "../../../pages/search result/SearchResultSlice";

const DateFilter = () => {
  const [openCalender, setopenCalender] = useState(false);

  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.searchEvent.filters);

  function updateDateFilter(field, value) {
    dispatch(
      updateFilters({
        field: field,
        value: value,
      })
    );
  }

  return (
    <div className="mt-5">
      <Text size="sm" fw={600}>
        Date
      </Text>

      <div className="d-grid gap-3 mt-2">
        <Checkbox
          label="Today"
          checked={filterData.date == "Today"}
          onClick={() => updateDateFilter("date", "Today")}
        />
        <Checkbox
          label="Tommorow"
          checked={filterData.date == "Tomorrow"}
          onClick={() => updateDateFilter("date", "Tomorrow")}
        />
        <Checkbox
          label="This weekend"
          checked={filterData.date == "This weekend"}
          onClick={() => updateDateFilter("date", "This weekend")}
        />
        <Checkbox
          label="This week"
          checked={filterData.date == "This week"}
          onClick={() => updateDateFilter("date", "This week")}
        />
        <Checkbox
          label="This month"
          checked={filterData.date == "This month"}
          onClick={() => updateDateFilter("date", "This month")}
        />
        <Checkbox
          label="Next month"
          checked={filterData.date == "Next month"}
          onClick={() => updateDateFilter("date", "Next month")}
        />

        <Checkbox
          checked={filterData.date instanceof Date === true}
          label="Pick a date"
          onClick={() => {
            setopenCalender((prev) => !prev);
          }}
        />
        {openCalender ? (
          <DatePicker
            popover
            property={{ zIndex: 10000 }}
            // defaultDate={new Date(2015, 1)}
            value={filterData.date}
            onChange={(date) => updateDateFilter("date", date)}
            // onChange={setValue}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DateFilter;
