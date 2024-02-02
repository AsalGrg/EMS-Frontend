import { Carousel } from "@mantine/carousel";
import { Avatar, Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import React from "react";

const EventCollection = () => {
  return (
    <main>
      <Carousel
        height={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideSize={{ base: "90%", md: "50%" }}
        slideGap={{ base: 10, sm: "md" }}
        align="start"
      >
        <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <img
                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102708416%2F232138391026%2F1%2Foriginal.20200604-182444?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=68a881f6f7a67d729dbf42e31c857b3a"
                class="img-fluid"
                alt="Responsive image"
              />
            </Card.Section>

            <Text fw={500} mt="md" size="lg">
              Norway Fjord Adventures
            </Text>

            <div className="mt-1 d-flex align-items-center">
              <Avatar
                component="a"
                href="https://github.com/rtivital"
                target="_blank"
                src="avatar.png"
                alt="it's me"
              />
              <p className="mt-3 ms-2">Prastuti</p>
            </div>

            <Text size="sm" fw={500} mt={"sm"} c={"#0A66C2"}>
              32 upcoming events
            </Text>

            <Text
              size="sm"
              mt="sm"
              fw={400}
              fs={"italic"}
              c="dimmed"
              lineClamp={3}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ad eveniet dicta tenetur repellat sequi vitae consequuntur quis
              laborum odio totam accusantium corrupti eos magnam officia enim
              sed cumque blanditiis labore, dolor iste porro dolorum voluptate
              saepe. Dolor, aliquam pariatur.
            </Text>
          </Card>
        </Carousel.Slide>

        <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <img
                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102708416%2F232138391026%2F1%2Foriginal.20200604-182444?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=68a881f6f7a67d729dbf42e31c857b3a"
                class="img-fluid"
                alt="Responsive image"
              />
            </Card.Section>

            <Text fw={500} mt="md" size="lg">
              Norway Fjord Adventures
            </Text>

            <div className="mt-1 d-flex align-items-center">
              <Avatar
                component="a"
                href="https://github.com/rtivital"
                target="_blank"
                src="avatar.png"
                alt="it's me"
              />
              <p className="mt-3 ms-2">Prastuti</p>
            </div>

            <Text size="sm" fw={500} mt={"sm"} c={"#0A66C2"}>
              32 upcoming events
            </Text>

            <Text
              size="sm"
              mt="sm"
              fw={400}
              fs={"italic"}
              c="dimmed"
              lineClamp={3}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ad eveniet dicta tenetur repellat sequi vitae consequuntur quis
              laborum odio totam accusantium corrupti eos magnam officia enim
              sed cumque blanditiis labore, dolor iste porro dolorum voluptate
              saepe. Dolor, aliquam pariatur.
            </Text>
          </Card>
        </Carousel.Slide>

        <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <img
                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102708416%2F232138391026%2F1%2Foriginal.20200604-182444?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=68a881f6f7a67d729dbf42e31c857b3a"
                class="img-fluid"
                alt="Responsive image"
              />
            </Card.Section>

            <Text fw={500} mt="md" size="lg">
              Norway Fjord Adventures
            </Text>

            <div className="mt-1 d-flex align-items-center">
              <Avatar
                component="a"
                href="https://github.com/rtivital"
                target="_blank"
                src="avatar.png"
                alt="it's me"
              />
              <p className="mt-3 ms-2">Prastuti</p>
            </div>

            <Text size="sm" fw={500} mt={"sm"} c={"#0A66C2"}>
              32 upcoming events
            </Text>

            <Text
              size="sm"
              mt="sm"
              fw={400}
              fs={"italic"}
              c="dimmed"
              lineClamp={3}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ad eveniet dicta tenetur repellat sequi vitae consequuntur quis
              laborum odio totam accusantium corrupti eos magnam officia enim
              sed cumque blanditiis labore, dolor iste porro dolorum voluptate
              saepe. Dolor, aliquam pariatur.
            </Text>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </main>
  );
};

export default EventCollection;
