import { Burger, Menu, Modal, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router";

const BurgerButton = () => {
  const [opened, { open, close, toggle }] = useDisclosure();
  const navigate = useNavigate();
  return (
    <section className="d-block d-lg-none w-100">
      <Menu trigger="click" width={"300px"}>
        <Menu.Target>
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Menu.Target>

        <Menu.Dropdown className="mt-3">
          <Menu.Item
            onClick={() => {
              return navigate("/c/create/new");
            }}
          >
            <Text size="lg" fw={600}>
              Create Event
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text size="lg" fw={600}>
              Find Vendor
            </Text>
          </Menu.Item>
          <Menu.Item
          onClick={() => {
            return navigate("/search");
          }}
          >
            <Text size="lg" fw={600}>
              Browse Event
            </Text>
          </Menu.Item>
          <Menu.Item
          onClick={() => {
            return navigate("/login");
          }}
          >
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
