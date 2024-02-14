import React from "react";
import "./Navbar.css";

import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import { Affix, Burger, Button, Text, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Navlinks from "./Navlinks";
import { useDisclosure } from "@mantine/hooks";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router";
import BurgerButton from "./BurgerButton";

const Navbar = ({ theme = "dark" }) => {
  const navigate = useNavigate();
  const navStyles = [
    { theme: "dark", backgroundColor: "#00192F", textColor: "#FFFF" },
    { theme: "white", backgroundColor: "#FFFF", textColor: "black" },
  ];

  const navImplStyle = navStyles.filter((style) => {
    if (style.theme === theme) {
      return style;
    }
  });

  return (
    <nav
      className="row px-5 pe-1 pe-md-5 py-2 border-bottom border-2 justify-content-between"
      style={{
        height: "80px",
        zIndex: "10000"
      }}
    >
      <Navlinks />

      <div className="col-3 col-lg-2 h-100 d-flex py-3 justify-content-center gap-3 ms-4 ms-md-0">
        <BurgerButton />
        <img
          src="https://th.bing.com/th/id/R.4615ad132fd8f23436d7e2baa6680991?rik=W9ZRWW7V4tHOmQ&pid=ImgRaw&r=0"
          style={{
            height: "100%",
          }}
          alt=""
        />
      </div>

      <div className="col-lg-5 col-5 d-flex justify-content-end align-items-center gap-3">
        <SearchBar />
        <Text size="md" fw={500} className="d-none d-lg-block">
          Login
        </Text>

        <Button
          radius={"xl"}
          color="#0A66C2"
          onClick={() => navigate("register")}
        >
          Get Started!
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
