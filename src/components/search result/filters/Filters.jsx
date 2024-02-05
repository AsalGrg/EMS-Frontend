import { Checkbox } from "@mantine/core";
import React from "react";
import DateFilter from "./DateFilter";
import TicketTypeFilter from "./TicketTypeFilter";
import CategoryFilter from "./CategoryFilter";

const Filters = () => {
  return (
    <main>
      <Checkbox defaultChecked label="Show events from vendors I follow" />

      {/* date filter */}
      <section>
        <DateFilter/>
        <TicketTypeFilter/>
        <CategoryFilter/>
      </section>
    </main>
  );
};

export default Filters;
 