import React from "react";
import { Link } from "react-router-dom";
import CategoriesGridView from "./CategoriesGridView";
import CategoriesCourselView from "./CategoriesCourselView";
import { Title } from "@mantine/core";

export default function Categories() {
  return (
    <section className="mt-5">
      <Title order={3} className=" mb-2">Categories</Title>

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
