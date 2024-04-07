import { Text } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utilities/formatDate";

const TicketModalTitle = () => {
  const formData = useSelector((state) => state.aboutEvent);
  const dispatch = useDispatch();

  return (
    <section className="">
      <Text size="xl" fw={600}>
        {formData.eventTitle}
      </Text>

      <Text size="md" c={"dimmed"} fw={600} className="mt-2">
        {formatDate(formData.eventStartDate)}
      </Text>
    </section>
  );
};

export default TicketModalTitle;
