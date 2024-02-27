import { Divider, Menu, Text, rem } from "@mantine/core";
import {
    IconHeart,
  IconLogout,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTicket,
  IconUserCheck,
} from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router";

const MenuItems = () => {

  const navigate= useNavigate();

  return (
    <>
      <Menu.Item
        leftSection={
          <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Manage my events
      </Menu.Item>
      <Divider />
      <Menu.Item
        leftSection={<IconTicket style={{ width: rem(14), height: rem(14) }} />}
      >
        Tickets
      </Menu.Item>
      <Menu.Item
        leftSection={<IconHeart style={{ width: rem(14), height: rem(14) }} />}
      >
        Liked
      </Menu.Item>

      <Menu.Item
        leftSection={<IconUserCheck style={{ width: rem(14), height: rem(14) }} />}
      >
        Following
      </Menu.Item>

      <Divider/>

      <Menu.Item
        leftSection={<IconUserCheck style={{ width: rem(14), height: rem(14) }} />}
        onClick={()=>navigate("user")}
      >
        Profile
      </Menu.Item>

      <Menu.Item
        leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
      >
        Log out
      </Menu.Item>
    </>
  );
};

export default MenuItems;
