import { Text } from "@mantine/core";
import React from "react";

const EventCreationOptions = () => {
  return (
    <div className="col-12 row mt-3 justify-content-evenly">
      <div className="col-5 rounded rounded-3 d-flex flex-column justify-content-center  align-items-center highlight-div gap-4">
        <i class="fa-solid fa-pen highlight-icon"></i>

        <Text size="xl" fw={600}>
          Start from scratch
        </Text>

        <Text size="sm" fw={400}>
          Add all your event details, add event tickets from the beginning
        </Text>

        <button className="dashboard-btn">Create event</button>
      </div>

      <div className="col-5 rounded rounded-3 d-flex flex-column justify-content-center  align-items-center highlight-div gap-4">
        <i class="fa-regular fa-pen-to-square highlight-icon"></i>
        <Text size="xl" fw={600}>
          Continue draft
        </Text>

        <Text size="sm" fw={400}>
          Complete your draft events from where your left it.
        </Text>

        <button className="dashboard-btn">Continue draft</button>
      </div>
    </div>
  );
};

export default EventCreationOptions;
