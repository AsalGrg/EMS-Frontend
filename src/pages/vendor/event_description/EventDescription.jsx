import { Badge, Text } from "@mantine/core";
import { IconChevronDown, IconDropletDown, IconEye } from "@tabler/icons-react";
import React from "react";
import IntroductionSection from "../../../components/vendor/event_description/IntroductionSection";
import TodosAndAnalysis from "../../../components/vendor/event_description/TodosAndAnalysis";
import ShareEventSection from "../../../components/vendor/event_description/ShareEventSection";
import EventOrdersSection from "../../../components/vendor/event_description/EventOrdersSection";

const EventDescription = () => {
  return (
    <section>
      <h1 className="display-6 fw-bold">Dashboard</h1>
      <IntroductionSection />

      <TodosAndAnalysis/>

      <ShareEventSection/>

      <EventOrdersSection/>
    </section>
  );
};

export default EventDescription;
