import { Text, rem } from "@mantine/core";
import { IconTicket } from "@tabler/icons-react";
import React from "react";

const TodosAndAnalysis = () => {
  const icoStyle = {
    height: rem(18),
    width: rem(18),
  };
  return (
    <div className="row mt-4 gap-5 justify-content-between align-items-center">
      <div className="col-3 shadow px-3 py-3 d-flex flex-column gap-2">
        <Text size="md" fw={500}>
          Tickets Sold
        </Text>

        <div className="d-flex text-center gap-1">
          <Text size="xl" fw={700}>
            0
          </Text>

          <Text size="md" className="mt-2" fw={600}>
            / 0
          </Text>
        </div>

        <Text size="sm">Paid</Text>
      </div>

      {/* This section only if the event is in draft */}
      <div className="col-7">
        <Text size="md" fw={500}>
          Your To-do List
        </Text>

        <div className="d-flex mt-3 gap-2 align-items-center">
          <IconTicket style={icoStyle} />
          <div className="d-flex flex-column gap-1">
            <Text size="sm">Your event does not have tickets</Text>
            <Text size="sm" c="blue" fw={600}>
              Add tickets
            </Text>
          </div>
        </div>

        <div className="d-flex mt-3 gap-2 align-items-center">
          <IconTicket style={icoStyle} />
          <div className="d-flex flex-column gap-1">
            <Text size="sm">Your event does not have basic information</Text>
            <Text size="sm" c="blue" fw={600}>
              Add basic information
            </Text>
          </div>
        </div>

        <div className="d-flex mt-3 gap-2 align-items-center">
          <IconTicket style={icoStyle} />
          <div className="d-flex flex-column gap-1">
            <Text size="sm">Your event does not have cover image</Text>
            <Text size="sm" c="blue" fw={600}>
              Add cover images
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosAndAnalysis;
