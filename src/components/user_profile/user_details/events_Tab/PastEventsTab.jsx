import { Text } from "@mantine/core";
import React from "react";
import EachEvent from "./EachEvent";
import { useSelector } from "react-redux";
import EventSnippetsCourselView from "../../../global/EventSnippetsCourselView";
import EventSnippetsGridView from "../../../home/EventSnippetsGridView";
import NoEventsBanner from "../../../global/NoEventsBanner";

const PastEventsTab = () => {
  const userData = useSelector((state) => state.userProfile);
  return (
    <section className="container mt-4 px-5">
      <Text size="xl" fw={700}>
        Past Events
      </Text>

      <div className="row mt-1 gy-4">
      {userData.pastEvents.length > 0 ? (
          <>
            {/* grid view */}
            <div className="d-none d-lg-block">
              <EventSnippetsGridView events={userData.pastEvents} />
            </div>

            {/* coursel view */}

            <div className="d-block d-lg-none">
              <EventSnippetsCourselView events={userData.pastEvents} />
            </div>
          </>
        ) : (
          <NoEventsBanner />
        )}
      </div>
    </section>
  );
};

export default PastEventsTab;
