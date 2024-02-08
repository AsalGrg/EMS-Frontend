import React from "react";
import { useParams } from "react-router";
import SearchResultIntroduction from "../../components/search result/SearchResultIntroduction";
import Filters from "../../components/search result/filters/Filters";
import Results from "../../components/search result/results/Results";
import Maps from "../../components/search result/map/Map";

const SearchResult = () => {
  const { eventName, location } = useParams();

  return (
    <main className="">
      <SearchResultIntroduction />

      <div className="row bg-secondary"
      style={{
        width: "100vw"
      }}>
        <div className="col-lg-2 col-12 bg-warning">
          <Filters />
        </div>

        <div className="col-lg-7 px-md-5 col-12 bg-danger">
          
          <Results/>
        </div>

        <div className="col-lg-3 d-lg-block d-none bg-primary">
          <Maps/>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
