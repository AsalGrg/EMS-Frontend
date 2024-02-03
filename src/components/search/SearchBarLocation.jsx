import React, { useState } from "react";
import "./SearchBarLocation.css";
import { IoLocationSharp } from "react-icons/io5";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const SearchBarLocation = () => {
  {
  }

  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    // <div>
    //   <PlacesAutocomplete
    //     value={address}
    //     onChange={setAddress}
    //     onSelect={handleSelect}
    //   >
    //     {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    //       <div>
    //         <p>Latitude: {coordinates.lat}</p>
    //         <p>Longitude: {coordinates.lng}</p>

    //         <input {...getInputProps({ placeholder: "Type address" })} />

    //         <div>
    //           {loading ? <div>...loading</div> : null}

    //           {suggestions.map((suggestion) => {
    //             const style = {
    //               backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
    //             };

    //             return (
    //               <div {...getSuggestionItemProps(suggestion, { style })}>
    //                 {suggestion.description}
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     )}
    //   </PlacesAutocomplete>
    // </div>
    <>
      <IoLocationSharp className="searchBarIcons" />
      <input
        type="text"
        className="searchBarLocationInput w-50"
        placeholder="Location"
      />
    </>
  );
};

export default SearchBarLocation;
