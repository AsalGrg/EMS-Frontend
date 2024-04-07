import React from "react";

import "./EventSnippetsCourselView.css";
import { Carousel } from "@mantine/carousel";
import EventCard from "./EventCard";

const EventSnippetsCourselView = ({ events }) => {
  return (
    <div className="catEventSnippet mt-3">
      <div className="">
        <Carousel
          withIndicators
          height={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideSize={{ base: "100%", sm: "33%", md: "25%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
        >
          {events.map((each) => (
            <Carousel.Slide>
              <EventCard event={each} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EventSnippetsCourselView;
