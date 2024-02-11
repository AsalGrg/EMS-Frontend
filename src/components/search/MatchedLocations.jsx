import { List, ThemeIcon, rem } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed, IconMapPinFilled } from '@tabler/icons-react';
import React from "react";

const MatchedLocation = () => {
  return (
    <section>
      <List
        spacing="xs"
        size="lg"
        center
        icon={
          <ThemeIcon color="blue" size={27} radius="xl">
            <IconMapPinFilled style={{ width: rem(18), height: rem(18) }} />
          </ThemeIcon>
        }
      >
        <List.Item>Clone or download repository from GitHub</List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>To start development server run npm start command</List.Item>
        <List.Item>
          Run tests to make sure your changes do not break the build
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
          }
        >
          Submit a pull request once you are done
        </List.Item>
      </List>
    </section>
  );
};

export default MatchedLocation;
