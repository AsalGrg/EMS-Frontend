import { Checkbox, Text } from "@mantine/core";
import React from "react";

const TicketTypeFilter = () => {
  return (
    <div className="mt-5">
      <Text size="sm" fw={600}>
        Ticket
      </Text>

      <div className="d-grid gap-3 mt-2">
        <Checkbox label="Paid" />
        <Checkbox defaultChecked label="Free" />
        <Checkbox defaultChecked label="Donation" />
      </div>
    </div>
  );
};

export default TicketTypeFilter;
