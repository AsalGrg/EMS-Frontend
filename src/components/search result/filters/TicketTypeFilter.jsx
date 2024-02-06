import { Checkbox, Text } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../pages/search result/SearchResultSlice";

const TicketTypeFilter = () => {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.searchEvent.filters);

  function updateFilter(field, value) {
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
        Ticket
      </Text>

      <div className="d-grid gap-3 mt-2">
        <Checkbox
          label="Paid"
          checked={filterData.ticketType === "paid"}
          onClick={() => updateFilter("ticketType", "paid")}
        />
        <Checkbox
          label="Free"
          checked={filterData.ticketType === "free"}
          onClick={() => updateFilter("ticketType", "free")}
        />
        <Checkbox
          label="Donation"
          checked={filterData.ticketType === "donation"}
          onClick={() => updateFilter("ticketType", "donation")}
        />
      </div>
    </div>
  );
};

export default TicketTypeFilter;
