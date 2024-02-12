import React, { useState } from "react";
import "./SearchBarLocation.css";
import { IoLocationSharp } from "react-icons/io5";
import getPlaces from "../utilities/places";
import { useDispatch, useSelector } from "react-redux";
import { updateMatchedPlaces } from "../../pages/search/SearchBarSlice";

const SearchBarLocation = ({ handleFocus, isFocused }) => {
  const searchBarState = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchText = e.target.value;
    getPlaces(searchText)
      .then((places) => {
        dispatch(
          updateMatchedPlaces({
            matchedPlaces: places,
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
      });
  };

  const inputValue =
    !isFocused && searchBarState.selectedPlaces != null
      ? searchBarState.selectedPlaces.address.country
      : null

  return (
    <>
      <IoLocationSharp className="searchBarIcons" />
      <input
        type="text"
        className="searchInputSearchBar w-50"
        id="searchLocation"
        placeholder="Location"
        onClick={(e) => {
          e.stopPropagation();
          handleFocus();
        }}
        onChange={handleChange}
        value={inputValue}
      />
    </>
  );
};

export default SearchBarLocation;
