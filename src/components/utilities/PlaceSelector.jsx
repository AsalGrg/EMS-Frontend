import React, { useEffect, useRef, useState } from "react";
import { Button, Menu, Text, rem } from "@mantine/core";
import axios from "axios";
import {
  IconCircleX,
  IconClock,
  IconCross,
  IconGps,
} from "@tabler/icons-react";
import getPlaces from "./places";
import { getCurrentLocation } from "./getCurrentLocation";

//css in app.css
const PlaceSelector = ({ setLocation }) => {
  const [currentLocation, setcurrentLocation] = useState(null);

  const [valuesToBeShown, setvaluesToBeShown] = useState();

  const [valuesToBeWritten, setvaluesToBeWritten] = useState("");
  const [matchedPlaces, setmatchedPlaces] = useState([]);

  const [isSearching, setisSearching] = useState(false);

  const handleLocationChange = (menuFrom) => {
    let changedValue;

    if (menuFrom === "current") {
      changedValue = currentLocation.country;
      setvaluesToBeShown(changedValue);
      setLocation(changedValue);
    } else if (menuFrom === "online") {
      console.log("online");
      changedValue = "Online Events";
      setvaluesToBeShown(changedValue);
      setLocation('online');
    } else if (menuFrom === "search") {
      console.log("search");
      setisSearching(true);
      setvaluesToBeWritten("");
    }
  };

  useEffect(() => {
    function getInitialLocation() {
      getCurrentLocation((error, address) => {
        if (error) {
          console.error("Error:", error);
        } else {
          setLocation(address.country);
          setcurrentLocation(address);
          setvaluesToBeShown(address.country);
        }
      });
    }

    getInitialLocation();
  }, []);

  const handleChange = (e) => {
    const searchText = e.target.value;
    setvaluesToBeWritten(searchText);
    getPlaces(searchText)
      .then((places) => {
        setmatchedPlaces(places);
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
      });
  };

  function updateSelectedPlace(selectedPlace) {
    setmatchedPlaces([]);
    setisSearching(false);
    setLocation(selectedPlace.address.country);
    setvaluesToBeWritten(selectedPlace.address.country);
    setvaluesToBeShown(selectedPlace.address.country);
    console.log(selectedPlace.address.country);
  }

  return (
    <>
      {!isSearching ? (
        <Menu shadow="md" width={300}>
          <Menu.Target>
            <input
              placeholder="Location"
              className="SelectorInput"
              value={valuesToBeShown}
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              onClick={() => handleLocationChange("current")}
              leftSection={
                <IconGps
                  style={{ width: rem(25), height: rem(25) }}
                  color="#3659E3"
                />
              }
            >
              <Text size="md">Use current Location</Text>
            </Menu.Item>
            <Menu.Item
              onClick={() => handleLocationChange("online")}
              leftSection={
                <IconClock
                  style={{ width: rem(25), height: rem(25) }}
                  color="#3659E3"
                />
              }
            >
              <Text size="md">Online</Text>
            </Menu.Item>

            <Menu.Item
              onClick={() => handleLocationChange("search")}
              leftSection={
                <IconClock
                  style={{ width: rem(25), height: rem(25) }}
                  color="#3659E3"
                />
              }
            >
              <Text size="md">Search Location</Text>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Menu shadow="md" width={300} opened={matchedPlaces.length > 0}>
          <Menu.Target>
            <div className="d-flex align-items-center cursor-pointer">
              <input
                placeholder="Location"
                className="SelectorInput"
                value={valuesToBeWritten}
                onChange={(e) => handleChange(e)}
              />

              <IconCircleX
                onClick={() => setisSearching(false)}
                style={{ width: rem(25), height: rem(25) }}
                color="#3659E3"
              />
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            {matchedPlaces.map((eachLocation) => (
              <Menu.Item
                key={eachLocation.place_id}
                onClick={(e) => {
                  e.stopPropagation();
                  updateSelectedPlace(eachLocation);
                }}
              >
                {eachLocation.display_name}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      )}
    </>
  );
};

export default PlaceSelector;
