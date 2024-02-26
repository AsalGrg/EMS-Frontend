import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import { Affix, Burger, Button, Text, rem } from "@mantine/core";
import Navlinks from "./Navlinks";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router";
import BurgerButton from "./BurgerButton";
import { get_user_data } from "../../services/check loggedIn/get_user_data";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await get_user_data();

      if (res.ok) {
        setisLoggedIn(true);
      }
    };

    fetchData();
  }, []);

  return (
    <nav
      className="row px-5 pe-1 pe-md-5 py-1 border-bottom border-2 justify-content-between w-100"
      style={{
        height: "80px",
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

        {isLoggedIn ? (
          <p>LoggedIn</p>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
