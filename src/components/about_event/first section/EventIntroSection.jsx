import { Badge } from "@mantine/core";
import { IconSpeakerphone } from "@tabler/icons-react";
import React from "react";
import OrganizerSnippet from "./OrganizerSnippet";

const EventIntroSection = () => {
  return (
    <section>
      {/* div for badges */}

      <div className="mb-3">
        <Badge variant="light" color="violet" className="me-2 p-3">
          <IconSpeakerphone size={20} className="me-2" />
          Ticket Sales End Soon
        </Badge>

        <Badge variant="light" color="red" className="me-2 p-3">
          <IconSpeakerphone size={20} className="me-2" /> Event Ends Soon
        </Badge>
      </div>

      {/* about events */}
      <div className="mb-5">
        <h5>Event Date</h5>

        <h1 className="fw-bolder">Event Title</h1>
      </div>

      <OrganizerSnippet/>
    </section>
  );
};

export default EventIntroSection;
