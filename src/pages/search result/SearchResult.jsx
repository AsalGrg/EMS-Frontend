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

      <div className="row"
      style={{
        width: "100vw"
      }}>
        <div className="col-xl-2 col-lg-3 col-12">
          <Filters />
        </div>

        <div className="col-xl-6 col-lg-9 px-md-5 col-12">
          
          <Results/>
        </div>

        <div className="col-xl-4 d-lg-block d-none">
          <Maps/>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
