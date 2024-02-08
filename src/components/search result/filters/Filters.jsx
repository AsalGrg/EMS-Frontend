import React from "react";
import FiltersLargeScreen from "./FiltersLargeScreen";

const Filters = () => {
  return (
    <main>
      <section className="d-none d-lg-block ps-3">
        <FiltersLargeScreen/>
      </section>

      <section className="d-block d-lg-none">

      </section>
    </main>
  );
};

export default Filters;
 