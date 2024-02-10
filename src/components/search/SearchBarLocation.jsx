import React, { useState } from "react";
import "./SearchBarLocation.css";
import { IoLocationSharp } from "react-icons/io5";
import getPlaces from "../utilities/places";
import { useDispatch, useSelector } from "react-redux";
import { updateMatchedPlaces } from "../../pages/search/SearchBarSlice";

const SearchBarLocation = ({ handleFocus, handleBlur }) => {
  const [listPlace, setListPlace] = useState([]);

  const searchBarState = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchText = e.target.value;
    getPlaces(searchText)
      .then((places) => {
        dispatch(updateMatchedPlaces(places));
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
      });
  };

  return (
    <>
      <IoLocationSharp className="searchBarIcons" />
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="searchInputSearchBar w-50"
        id="searchLocation"
        placeholder="Location"
        onChange={handleChange}
        value={
          searchBarState.selectedPlace != null
            ? searchBarState.selectedPlace.address.country
            : null
        }
      />
    </>
  );

  // return (
  //   // <div>
  //   //   <PlacesAutocomplete
  //   //     value={address}
  //   //     onChange={setAddress}
  //   //     onSelect={handleSelect}
  //   //   >
  //   //     {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
  //   //       <div>
  //   //         <p>Latitude: {coordinates.lat}</p>
  //   //         <p>Longitude: {coordinates.lng}</p>

  //   //         <input {...getInputProps({ placeholder: "Type address" })} />

  //   //         <div>
  //   //           {loading ? <div>...loading</div> : null}

  //   //           {suggestions.map((suggestion) => {
  //   //             const style = {
  //   //               backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
  //   //             };

  //   //             return (
  //   //               <div {...getSuggestionItemProps(suggestion, { style })}>
  //   //                 {suggestion.description}
  //   //               </div>
  //   //             );
  //   //           })}
  //   //         </div>
  //   //       </div>
  //   //     )}
  //   //   </PlacesAutocomplete>
  //   // </div>
  //   <>
  //     {/* <IoLocationSharp className="searchBarIcons" />
  //     <input
  //       type="text"
  //       className="searchBarLocationInput w-50"
  //       placeholder="Location"
  //     /> */}

  //   </>
  // );
};

export default SearchBarLocation;
