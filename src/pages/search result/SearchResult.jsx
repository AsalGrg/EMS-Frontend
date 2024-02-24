import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import SearchResultIntroduction from "../../components/search result/SearchResultIntroduction";
import Filters from "../../components/search result/filters/Filters";
import Results from "../../components/search result/results/Results";
import Map, { Maps } from "../../components/utilities/Map";
import search_event from "../../services/search event/search_event";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  initializeSearchResultState,
  updateSearchEventState,
} from "./SearchResultSlice";
import getPlaces from "../../components/utilities/places";

const SearchResult = () => {
  const { eventName, location } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.searchEvent);

  const fetchedData = useLoaderData();
  let centerGeo

  useEffect(() => {
    centerGeo = async () => {
      return await getPlaces(location);
    };

    console.log("sfkdkdkfkdf")
  }, []);

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

  useEffect(() => {
    dispatch(applyFilters());
  }, [dispatch, state.filters]);

  return (
    <main className="">
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
          <div className="col-xl-4 d-lg-block d-none">
            <Maps center={centerGeo} geoCodes={state.filteredData} />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export async function searchResultLoader({ params }) {
  const eventName = params.eventName;
  const location = params.location;

  const res = await search_event(eventName, location);

  if (res.ok) {
    const fetchedData = res.json();

    //might be wrong

    return fetchedData;
  }
  return null;
}

export default SearchResult;
