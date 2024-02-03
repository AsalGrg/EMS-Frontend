import React, { useEffect, useState } from "react";
import Introduction from "../../components/home/Introduction";
import SearchFilter from "../../components/home/SearchFilter";
import EventSnippets from "../../components/global/EventSnippets";
import VendorSnippets from "../../components/global/VendorSnippets";
import Categories from "../../components/home/category/Categories";
import EventCollection from "../../components/global/event collections/EventCollection";
import { Text, Title } from "@mantine/core";

const Home = () => {
  const [trendingEvents, settrendingEvents] = useState([]);

  const [upcomingEvents, setupcomingEvents] = useState([]);

  const [eventsPerChoice, seteventsPerChoice] = useState([]);

  return (
    <div className="container px-5">
      <Introduction />
      <SearchFilter />

      {trendingEvents.length ? (
        <EventSnippets events={trendingEvents} title="Trending Events" />
      ) : null}

      <Categories />

      {/* events as per user location choice/ nepal, online */}

      <EventSnippets events={upcomingEvents} title="Upcoming events" />

      {/* accessible only after the user is logged in */}
      <VendorSnippets />

      {/* hand picked collections of events */}
      <section
        className="mt-5 p-md-5 rounded p-4"
        style={{
          backgroundColor: "#f8f7fa",
        }}
      >
        <Title order={3}
        className="mb-2"
        >
          Hand-picked{" "}
          <Text span c="#0A66C2" inherit>
            Collection
          </Text>
        </Title>

        <Text size="sm" className="mb-3">Explore curated event collections of excellence in food, music, wellness, and beyond, for every enthusiast.</Text>
        <EventCollection slideSize={{ base: "90%", md: "50%" }}/>
      </section>

      {/* events you may like */}
      <EventSnippets events={eventsPerChoice} title="Based on your choice" />
    </div>
  );
};

export default Home;
