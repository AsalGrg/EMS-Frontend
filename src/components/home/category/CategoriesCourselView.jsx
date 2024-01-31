import { Carousel } from "@mantine/carousel";
import React from "react";
import { CategoriesToDisplay } from "./CategoriesToDisplay";

const CategoriesCourselView = () => {
  return (
    <section>
      <Carousel
        withIndicators
        height={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideSize={{ base: "20%", sm: "15%", md: "20%" }}
        slideGap={{ base: 20, sm: "lg" }}
        align="start"
      >
        {
            CategoriesToDisplay.map(eachCat=>(
                <Carousel.Slide>
                    {eachCat}
                </Carousel.Slide>
            ))
        }
      </Carousel>
    </section>
  );
};

export default CategoriesCourselView;
