import React from "react";
import "./SearchBarInput.css";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IconArrowRight } from "@tabler/icons-react";
import { rem } from "@mantine/core";
import { updateSearchBarState } from "../../pages/search/SearchBarSlice";
import { Link } from "react-router-dom";

const SearchBarInput = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.searchBar);

  const eventName= formData.searchedEvent!=null ? formData.searchedEvent: "all events"
  const location = formData.selectedPlaces !=null? formData.selectedPlaces.address.country: "online"
  const toUrl= `/search/${eventName}/${location}`

  return (
    <>
      <IoSearch className="searchBarIcons" />
      <input
        type="text"
        className="searchInputSearchBar w-75"
        placeholder="Search for anything"
        value={formData.searchedEvent}
        onChange={(e) => {
          dispatch(
            updateSearchBarState({
              field: "searchedEvent",
              value: e.target.value,
            })
          );
        }}
      />

      <Link to={toUrl}><IconArrowRight
        style={{ width: rem(80), height: rem(50) }}
        className="arrowRightIcon"
      />
      </Link>
    </>
  );
};

export default SearchBarInput;
