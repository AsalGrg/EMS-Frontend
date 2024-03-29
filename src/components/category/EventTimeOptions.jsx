import React from "react";

import "./EventTimeOptions.css";
import MyCoursel from "../utilities/MyCoursel";
import { Carousel } from "@mantine/carousel";

const EventTimeOptions = ({ categoryTitle }) => {
  return (
    <section className="eventTimeOptionsDiv mb-5">
      <h1 className="highlights">{categoryTitle} Event Time</h1>
      <Carousel
      
        style={{
          backgroundColor: "#f8f7fa",
        }}
        height={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideSize={{ base: "32%", sm: "33%", md: "24%" }}
        slideGap={{ base: 10, sm: "md" }}
        align="start"
      >
        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3">Today</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3">Tommorow</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3">This weekend</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3">This week</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3">Next week</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3">This month</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3">Next month</p>
          </div>
        </Carousel.Slide>
      </Carousel>
    </section>
  );
};

export default EventTimeOptions;
