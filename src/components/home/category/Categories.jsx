import React from "react";
import { Link } from "react-router-dom";
import CategoriesGridView from "./CategoriesGridView";
import CategoriesCourselView from "./CategoriesCourselView";

export default function Categories() {
  return (
    <section className="mt-5">
      <h4 className="text-center mb-5">Categories</h4>

      {/* for lg scrn -> grid view */}

      <div className="d-block d-lg-none">
        <CategoriesCourselView />
      </div>

      <div className="d-none d-lg-block">
        <CategoriesGridView />
      </div>
    </section>
  );
}
