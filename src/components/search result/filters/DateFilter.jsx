import { Checkbox, Text } from "@mantine/core";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../pages/search result/SearchResultSlice";

const DateFilter = () => {
  
  const [openCalender, setopenCalender] = useState(false);

  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.searchEvent.filters);

  function update(field, value) {
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
          checked={filterData.date == "today"}
          onClick={() => update("date", "today")}
        />
        <Checkbox
          label="Tommorow"
          checked={filterData.date == "tommorow"}
          onClick={() => update("date", "tommorow")}
        />
        <Checkbox
          label="This weekend"
          checked={filterData.date == "this Weekend"}
          onClick={() => update("date", "this Weekend")}
        />
        <Checkbox
          label="This week"
          checked={filterData.date == "this Week"}
          onClick={() => update("date", "this Week")}
        />
        <Checkbox
          label="This month"
          checked={filterData.date == "this Month"}
          onClick={() => update("date", "this Month")}
        />
        <Checkbox
          label="Next month"
          checked={filterData.date == "next Month"}
          onClick={() => update("date", "next Month")}
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
            onChange={(date)=>update("date",date )}
            // onChange={setValue}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DateFilter;
