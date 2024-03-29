import React from "react";
import "./VendorSnippets.css";
import { Avatar, Button, Card, Image, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";


const VendorSnippets = ({vendors}) => {
  return (
    <div className="vendorSnippets">
      <h1 className="highlights">Vendors To Follow</h1>

      <Carousel
        withIndicators
        height={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideSize={{ base: "50%", sm: "33%", md: "20%" }}
        slideGap={{ base: "md", sm: "md" }}
        loop
        align="start"
      >

        {vendors.map(each=>(
          <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <div>
              <Card.Section className="d-flex justify-content-center" mt="sm">
                <Avatar src={each.vendorProfile} alt="it's me" size="lg" />
              </Card.Section>

              <Text fw={600} mt="md" className="text-center">
                {each.vendorName}
              </Text>

              <Text fw={400} c="dimmed" className="text-center">
                {each.vendorFollowers} followers
              </Text>
            </div>

            <Button variant="filled" radius="lg" mt="xl">
              Follow
            </Button>
          </Card>
        </Carousel.Slide>
        ))}
        

      </Carousel>
    </div>
  );
};

export default VendorSnippets;
