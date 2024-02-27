import { Burger, Menu, Modal, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const BurgerButton = () => {
  const [opened, { open, close, toggle }] = useDisclosure();

  return (
    <section className="d-block d-lg-none w-100">
      <Menu trigger="click"
      width={"300px"}>
        <Menu.Target>
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Menu.Target>

        <Menu.Dropdown className="mt-3">
          <Menu.Item>
            <Text size="lg" fw={600}>
              Create Event
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text size="lg" fw={600}>
              Find Vendor
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text size="lg" fw={600}>
              Browse Event
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text size="lg" fw={600}>
              Login
            </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </section>
  );
};

export default BurgerButton;
