import { Badge } from "@mantine/core";
import { IconSpeakerphone } from "@tabler/icons-react";
import React from "react";
import OrganizerSnippet from "./OrganizerSnippet";
import { useSelector } from "react-redux";
import { faPray } from "@fortawesome/free-solid-svg-icons";
import { checkIfDateIsAfterAWeek, checkIfDateIsBeforeAWeek } from "../../utilities/badgeChecker";

const EventIntroSection = () => {
  const formData = useSelector((state) => state.aboutEvent);
  //  const checkData = useSelector(state=> state.createEvent)

  return (
    <section>
      {/* div for badges */}

      <div className="mb-3">
        {checkIfDateIsAfterAWeek(formData.eventEndDate) && (
          <Badge variant="light" color="red" className="me-2 p-3">
            <IconSpeakerphone size={20} className="me-2" /> Event Ends Soon
          </Badge>
        )}

        {checkIfDateIsAfterAWeek(formData.ticketDetails.salesEndDate) && (
          <Badge variant="light" color="violet" className="me-2 p-3">
            <IconSpeakerphone size={20} className="me-2" />
            Ticket Sales End Soon
          </Badge>
        )}
      </div>

      {/* about events */}
      <div className="mb-5">
        <h5>{formData.eventDate}</h5>

        <h1 className="fw-bolder">{formData.eventTitle}</h1>
      </div>

      <OrganizerSnippet />
    </section>
  );
};

export default EventIntroSection;
