import { Text } from "@mantine/core";
import React from "react";
import EachEvent from "./EachEvent";
import { useSelector } from "react-redux";

const PastEventsTab = () => {
  const userData = useSelector((state) => state.userProfile);
  return (
    <section className="container mt-4 px-5">
      <Text size="xl" fw={700}>
        Past Events
      </Text>

      <div className="row mt-1 gy-4">
        {userData.pastEvents.length>0 ? (
          userData.pastEvents.map((each) => <EachEvent eachEvent={each} />)
        ) : (
          <Text size="lg">No Events at the moment</Text>
        )}
      </div>
    </section>
  );
};

export default PastEventsTab;
