import { Text, rem } from "@mantine/core";
import { IconTicket } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodosAndAnalysis = () => {
  const icoStyle = {
    height: rem(18),
    width: rem(18),
  };

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.eventDescription);

  const basicEventDetails = formData.eventBasicDetails;

  return (
    <div className="row mt-4 gap-5 justify-content-between align-items-center">
      <div className="col-3 border border-3 rounded px-3 py-3 d-flex flex-column gap-2">
        <Text size="md" fw={500}>
          Tickets Sold
        </Text>

        <div className="d-flex text-center gap-1">
          <Text size="xl" fw={700}>
            {basicEventDetails.ticketsSold}
          </Text>

          <Text size="md" className="mt-2" fw={600}>
            / {basicEventDetails.ticketsForSale}
          </Text>
        </div>

        <Text size="sm" fw={500}>
          {basicEventDetails.ticketType}
        </Text>
      </div>

      {/* This section only if the event is in draft */}
      {basicEventDetails.eventStatus === "draft" ? (
        <div className="col-7">
          <Text size="md" fw={500}>
            Your To-do List
          </Text>

          {basicEventDetails.pageStatus <= 1 && (
            <div className="d-flex mt-3 gap-2 align-items-center">
              <IconTicket style={icoStyle} />
              <div className="d-flex flex-column gap-1">
                <Text size="md">Your event does not have cover image</Text>
              </div>
            </div>
          )}

          {basicEventDetails.pageStatus <= 2 && (
            <div className="d-flex mt-3 gap-2 align-items-center">
              <IconTicket style={icoStyle} />
              <div className="d-flex flex-column gap-1">
                <Text size="md">Your event does not have tickets</Text>
              </div>
            </div>
          )}

          <Text size="md" c="blue" fw={600} className="mt-3">
            Continue editing
          </Text>
        </div>
      ) : null}
    </div>
  );
};

export default TodosAndAnalysis;
