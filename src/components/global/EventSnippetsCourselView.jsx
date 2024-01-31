import React from "react";

import "./EventSnippetsCourselView.css";
import { Carousel } from "@mantine/carousel";
import { Card,Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

const EventSnippetsCourselView = () => {
  return (
    <div className="catEventSnippet">
      <h1 className="highlights">Most Popular Events</h1>

      <div className="">
        <Carousel
          withIndicators
          height={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideSize={{ base: "100%", sm: "33%", md: "25%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
        >
          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={180}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={500} mt="md">
                Norway Fjord Adventures
              </Text>

              <Text size="sm" fw={400} c="dimmed" mt="sm">
                Event Dates
              </Text>

              <Text size="sm" fw={400} c="red" mt="sm">
                From $0.00
              </Text>

              <Text size="sm" fw={400} mt="sm">
                Oragnizer name
              </Text>

              <Text size="sm" mt="sm" fw={400} right={<IconUser/>}>
                From $0.00
              </Text>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={180}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={500} mt="md">
                Norway Fjord Adventures
              </Text>

              <Text size="sm" fw={400} c="dimmed" mt="sm">
                Event Dates
              </Text>

              <Text size="sm" fw={400} c="red" mt="sm">
                From $0.00
              </Text>

              <Text size="sm" fw={400} mt="sm">
                Oragnizer name
              </Text>

              <Text size="sm" mt="sm" fw={400} right={<IconUser/>}>
                From $0.00
              </Text>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={180}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={500} mt="md">
                Norway Fjord Adventures
              </Text>

              <Text size="sm" fw={400} c="dimmed" mt="sm">
                Event Dates
              </Text>

              <Text size="sm" fw={400} c="red" mt="sm">
                From $0.00
              </Text>

              <Text size="sm" fw={400} mt="sm">
                Oragnizer name
              </Text>

              <Text size="sm" mt="sm" fw={400} right={<IconUser/>}>
                From $0.00
              </Text>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={180}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={500} mt="md">
                Norway Fjord Adventures
              </Text>

              <Text size="sm" fw={400} c="dimmed" mt="sm">
                Event Dates
              </Text>

              <Text size="sm" fw={400} c="red" mt="sm">
                From $0.00
              </Text>

              <Text size="sm" fw={400} mt="sm">
                Oragnizer name
              </Text>

              <Text size="sm" mt="sm" fw={400} right={<IconUser/>}>
                From $0.00
              </Text>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default EventSnippetsCourselView;
