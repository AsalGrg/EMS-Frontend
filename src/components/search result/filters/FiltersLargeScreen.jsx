import { Checkbox } from "@mantine/core";
import React from "react";
import DateFilter from "./DateFilter";
import TicketTypeFilter from "./TicketTypeFilter";
import CategoryFilter from "./CategoryFilter";

const FiltersLargeScreen = () => {
  return (
    <div>
      <Checkbox label="Show events from vendors I follow" />

      {/* date filter */}
      <section>
        <DateFilter />
        <TicketTypeFilter />
        <CategoryFilter />
      </section>

    </div>
  );
};

export default FiltersLargeScreen;
