import React from "react";
import { useParams } from "react-router";
import SearchResultIntroduction from "../../components/search result/SearchResultIntroduction";
import Filters from "../../components/search result/filters/Filters";
import Results from "../../components/search result/results/Results";

const SearchResult = () => {
  const { eventName, location } = useParams();

  return (
    <main className="px-4">
      <SearchResultIntroduction />

      <div className="row">
        <div className="col-xl-2 col-3">
          <Filters />
        </div>

        <div className="col-xl-6 col-lg-9 px-md-5 col-12">
          <Results/>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
