import { Carousel } from "@mantine/carousel";
import { Avatar, Card, Image, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import EachCollection from "./EachCollection";
import get_all_collections from "../../../services/user/get_all_collections";

const EventCollection = ({ slideSize }) => {
  const [eventCollection, seteventCollection] = useState([]);

  useEffect(() => {
    async function getAllCollections() {
      const res = await get_all_collections();

      if (res.ok) {
        const data = await res.json();
        seteventCollection(data);
      }
    }
    getAllCollections();
  }, []);

  return (
    <main>
      <Carousel
        height={{ base: "100%", sm: "53%", md: "33.333333%" }}
        slideSize={slideSize}
        slideGap={{ base: 10, sm: "md" }}
        align="start"
      >
        {eventCollection.length > 0 &&
          eventCollection.map((each) => (
            <Carousel.Slide>
              <EachCollection collection={each}/>
            </Carousel.Slide>
          ))}
      </Carousel>
    </main>
  );
};

export default EventCollection;
