import React from "react";

import "./EventTimeOptions.css";
import MyCoursel from "../utilities/MyCoursel";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router";
import { Title } from "@mantine/core";
import capitalizeWord from "../utilities/capitalizeWord";

const EventTimeOptions = ({ categoryTitle, location }) => {

  const navigate = useNavigate();

  function handleCategoryTimeNavigate(time){

    console.log("hehheheh")
    window.location.href = `/search/${categoryTitle}--events--${time}/${location}`
  }


  return (
    <section className="eventTimeOptionsDiv mt-5 mb-5">
      <Title className="highlights" order={3}>{capitalizeWord(categoryTitle)} Event Time</Title>
      <Carousel
        className="mt-3"
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
            <p className="mt-3"
            onClick={()=> handleCategoryTimeNavigate('Today')}
            >Today</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3"
             onClick={()=> handleCategoryTimeNavigate('Tomorrow')}
            >Tomorrow</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3"
            onClick={()=> handleCategoryTimeNavigate('This weekend')}
            >This weekend</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3"
            onClick={()=> handleCategoryTimeNavigate('This week')}
            >This week</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3"
            onClick={()=> handleCategoryTimeNavigate('Next week')}
            >Next week</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3"
            onClick={()=> handleCategoryTimeNavigate('This month')}
            >This month</p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="eventTimeOptionsView my-4">
            <p className="mt-3"
            onClick={()=> handleCategoryTimeNavigate('Next month')}
            >Next month</p>
          </div>
        </Carousel.Slide>
      </Carousel>
    </section>
  );
};

export default EventTimeOptions;
