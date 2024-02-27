import { Badge, Text } from "@mantine/core";
import React from "react";
import EachEvent from "./EachEvent";
import { useSelector } from "react-redux";

const UpcomingEventsTab = () => {
  const userData = useSelector((state) => state.userProfile);

  return (
    <section className="container mt-4 px-5">
      <Text size="xl" fw={700}>
        Upcoming Events
      </Text>

      <div className="row mt-1 gy-4">
        {userData.upcomingEvents.length>0 ? (
          userData.upcomingEvents.map((each) => <EachEvent eachEvent={each} />)
        ) : (
          <Text size="lg" c={"black"} className="text-center">No Events at the moment</Text>
        )}
      </div>
    </section>
  );
};

export default UpcomingEventsTab;
