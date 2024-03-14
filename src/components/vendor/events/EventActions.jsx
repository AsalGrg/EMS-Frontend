import { Divider, Menu, Text, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const EventActions = () => {
  return (
    <>
      <Menu.Item>
        <Text>View</Text>
      </Menu.Item>

      <Menu.Item>
        <Text>Edit</Text>
      </Menu.Item>

      <Menu.Item>
        <Text>Copy Link</Text>
      </Menu.Item>

      <Divider/>
      
      <Menu.Item>
        <Text c={"red"}>Delete</Text>
      </Menu.Item>
    </>
  );
};

export default EventActions;
