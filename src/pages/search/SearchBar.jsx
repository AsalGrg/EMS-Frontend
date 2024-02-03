import React from "react";
import SearchBarInput from "../../components/search/SearchBarInput";
import { GiCancel } from "react-icons/gi";
import SearchBarLocation from "../../components/search/SearchBarLocation";
import "./SearchBar.css";
import QuickOptions from "../../components/search/QuickOptions";
import EventCollection from "../../components/global/event collections/EventCollection";

const SearchBar = () => {
  return (
    <div className="row justify-content-evenly">
      <div className="col-12 d-flex justify-content-end mb-5">
        <GiCancel className="searchBarIcons" />
      </div>

      <div className="col-lg-5 col-12 px-lg-5 px-4">
        <div className="searchBarInputs">
          <div className="eachInput">
            <SearchBarInput />
          </div>

          <div className="eachInput">
            <SearchBarLocation />
          </div>

          <div className="eachInput">
            <QuickOptions />
          </div>

          <div className="d-none d-lg-block mt-4">
            <h5>Recent Popular Searches</h5>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-5 row mt-lg-0 mt-3 px-4">
        <div className="col-md-6 col-12 d-block d-lg-none">
          <h5>Recent Popular Searches</h5>
        </div>

        <div className="col-md-6 col-lg-12 col-12 mt-md-0 mt-2">
          <h4>Our favourite events collection</h4>
          <EventCollection />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
