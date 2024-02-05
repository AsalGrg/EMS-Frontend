import React from "react";
import { useParams } from "react-router";
import SearchResultIntroduction from "../../components/search result/SearchResultIntroduction";
import Filters from "../../components/search result/filters/Filters";
import Results from "../../components/search result/results/Results";

const SearchResult = () => {
  const { eventName, location } = useParams();

  return (
    <main className="px-3">
      <SearchResultIntroduction />

      <div className="row">
        <div className="col-2">
          <Filters />
        </div>

        <div className="col-6 px-5">
          <Results/>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
