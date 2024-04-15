import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import SearchResultIntroduction from "../../components/search result/SearchResultIntroduction";
import Filters from "../../components/search result/filters/Filters";
import Results from "../../components/search result/results/Results";
import Map, { Maps } from "../../components/utilities/Map";
import search_event from "../../services/search event/search_event";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  updateFilters,
  updateSearchEventState,
} from "./SearchResultSlice";
import getPlaces from "../../components/utilities/places";
import get_category_events from "../../services/get_category_events";
import get_event_by_location from "../../services/user/get_event_by_location";
import capitalizeWord from "../../components/utilities/capitalizeWord";
import quick_search_event from "../../services/search event/quick_search_event";

const SearchResult = () => {
  const { eventName, location } = useParams();

  const [isFirstMount, setIsFirstMount] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.searchEvent);

  const [centerGeo, setcenterGeo] = useState();

  const fetchedData = useLoaderData();

  //for getting a centered geoLocation of the map
  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        const geoData = await getPlaces(location);
        setcenterGeo(geoData);
      } catch (error) {
        console.error("Error fetching location details:", error);
      }
    };

    fetchLocationDetails();
    updateInitialState();
    checkForFilters();

    console.log("State updated");
  }, []);

  function updateInitialState() {
    if (fetchedData !== null) {
      dispatch(
        updateSearchEventState({
          field: "data",
          value: fetchedData,
        })
      );

      dispatch(
        updateSearchEventState({
          field: "filteredData",
          value: fetchedData,
        })
      );
    }
  }

  function checkForFilters() {
    if (eventName.includes("--")) {
      const parts = eventName.split("--");
      const categoryName = parts[0];
      const date = parts[2];

      if (categoryName !== "All") {
        dispatch(
          updateFilters({
            field: "categoryType",
            value: categoryName,
          })
        );
      }

      if (date !== "all") {
        console.log();
        dispatch(
          updateFilters({
            field: "date",
            value: date,
          })
        );
      }
    }
  }

  useEffect(() => {
    if (isFirstMount) {
      console.log("1st mount");
      dispatch(applyFilters());
      setIsFirstMount(false); // Set isFirstMount to false after the initial mount
      return; // Don't perform the check on initial mount
    }

    let categoryName;
    if (eventName.includes("--")) {
      const parts = eventName.split("--");
      categoryName = parts[0];
    }

    if (
      state.filters.categoryType === null &&
      categoryName &&
      capitalizeWord(categoryName) !== "All"
    ) {
      window.location.href = `/search/All--events--all/${location}`;
    }
    dispatch(applyFilters());
  }, [dispatch, state.filters]);

  return (
    <main className="fonts">
      <SearchResultIntroduction />

      <div
        className="row"
        style={{
          width: "100vw",
        }}
      >
        <div className="col-xl-2 col-lg-3 col-12">
          <Filters />
        </div>

        <div className="col-xl-6 col-lg-9 px-md-5 col-12">
          <Results />
        </div>

        {location != "online" && state.filteredData.length > 0 ? (
          centerGeo ? (
            <div className="col-xl-4 d-lg-block d-none">
              <Maps center={centerGeo} geoCodes={state.filteredData} />
            </div>
          ) : (
            <p>Loading</p>
          )
        ) : null}
      </div>
    </main>
  );
};

export async function searchResultLoader({ params }) {
  const eventName = params.eventName;
  const location = params.location;

  let fetchedData=null;

  if (eventName.includes("--")) {
    const parts = eventName.split("--");
    const categoryName = parts[0];

    if (categoryName == "All") {
      const res = await get_event_by_location(location);
      if (res.ok) {
        const data = await res.json();
        fetchedData = data.events;
      }
    } else {
      const res = await get_category_events(categoryName, location);
      if (res.ok) {
        const data = await res.json();
        fetchedData = data.categoryEvents;
      }
    }
    console.log("loader checks");
  } else {
    let res;

    if (location !== "all") {
      res = await search_event(eventName, location);
    } else {
      res = await quick_search_event(eventName);
    }
    if (res.ok) {
      const data = await res.json();
      console.log("Datatata");
      console.log(data);
      fetchedData = data;
    }
  }

  console.log(fetchedData)
  return fetchedData;
}

export default SearchResult;
