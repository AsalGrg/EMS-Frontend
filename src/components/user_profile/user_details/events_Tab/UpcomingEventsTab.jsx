import { Badge, Text } from "@mantine/core";
import React from "react";
import EachEvent from "./EachEvent";
import { useSelector } from "react-redux";
import EventSnippetsGridView from "../../../home/EventSnippetsGridView";
import EventSnippetsCourselView from "../../../global/EventSnippetsCourselView";
import NoEventsBanner from "../../../global/NoEventsBanner";

const UpcomingEventsTab = () => {
  const userData = useSelector((state) => state.userProfile);

  return (
    <section className="container mt-4 px-5">
      <Text size="xl" fw={700}>
        Upcoming Events
      </Text>

      <div className="row gy-4">
        {userData.upcomingEvents.length > 0 ? (
          <>
            {/* grid view */}
            <div className="d-none d-lg-block">
              <EventSnippetsGridView events={userData.upcomingEvents} />
            </div>

            {/* coursel view */}

            <div className="d-block d-lg-none">
              <EventSnippetsCourselView events={userData.upcomingEvents} />
            </div>
          </>
        ) : (
          <NoEventsBanner />
        )}
      </div>
    </section>
  );
};

export default UpcomingEventsTab;
