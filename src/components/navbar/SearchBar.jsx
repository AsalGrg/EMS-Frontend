import { rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SearchBar = () => {

    const navigate = useNavigate();

  return (
    <>
      <div
        className="rounded-pill border px-3 align-items-center d-none d-lg-flex"
        style={{
          backgroundColor: "#F4F5FB",
          height: "40px",
          width: "240px"
        }}
        onClick={()=>navigate("search")}
      >
        <IconSearch
          className="me-2"
          style={{
            height: rem(20),
            width: rem(20),
          }}
        />
        Search Events
      </div>

      <div className="d-block d-lg-none">
        <IconSearch
          className="me-2"
          style={{
            height: rem(20),
            width: rem(20),
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
