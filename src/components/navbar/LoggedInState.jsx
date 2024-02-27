import { Avatar, Menu, Text } from "@mantine/core";
import React from "react";
import MenuItems from "./MenuItems";

const LoggedInState = ({ userData }) => {
  return (
    <Menu trigger="hover" classNames="me-3" width={250}>
      <Menu.Target>
        <section className="d-flex align-items-center">
          {userData.userDp ? (
            <Avatar size={"md"} src={userData.userDp} />
          ) : (
            <Avatar size={"md"}>A</Avatar>
          )}
          <Text
            size="sm"
            className="ms-2 d-md-block d-none"
            fw={600}
            c={"grey"}
          >
            {userData.username}
          </Text>
        </section>
      </Menu.Target>

      <Menu.Dropdown className="mt-3" style={{
        zIndex: "10000"
      }}>
        <MenuItems />
      </Menu.Dropdown>
    </Menu>
  );
};

export default LoggedInState;
