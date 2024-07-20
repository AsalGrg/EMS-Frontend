import { Divider, Menu, Text, rem } from "@mantine/core";
import {
    IconHeart,
  IconLogout,
  IconMessageCircle,
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
        onClick={()=> navigate('/vendor/events')}
      >
        Manage my events
      </Menu.Item>
      <Divider />
      
      <Menu.Item
        leftSection={<IconHeart style={{ width: rem(14), height: rem(14) }} />}
        onClick={()=> navigate('/liked/events')}
      >
        Liked
      </Menu.Item>

      <Menu.Item
        leftSection={<IconUserCheck style={{ width: rem(14), height: rem(14) }} />}
        onClick={()=> navigate('/following')}
      >
        Following
      </Menu.Item>

      <Divider/>

      <Menu.Item
        leftSection={<IconUserCheck style={{ width: rem(14), height: rem(14) }} />}
        onClick={()=>navigate("/user/profile/me")}
      >
        Profile
      </Menu.Item>

      <Menu.Item
        leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} className="text-danger" color="red"/>
      }
      onClick={()=> {
        localStorage.removeItem('token')
        return navigate('/login')
      }}
      >
        Log out
      </Menu.Item>
    </>
  );
};

export default MenuItems;
