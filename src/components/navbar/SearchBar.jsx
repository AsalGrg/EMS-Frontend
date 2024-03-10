import { Input, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Input

      className="d-lg-block d-none"
        style={{
          height: "40px",
          width: "250px",
        }}

        placeholder="Search Events"
        leftSection={
          <IconSearch
            className="me-2"
            style={{
              height: rem(18),
              width: rem(18),
            }}
          />
        }
      />

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
