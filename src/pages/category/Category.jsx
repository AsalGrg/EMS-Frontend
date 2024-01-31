import React, { useState } from "react";
import CategoryIntroduction from "../../components/category/CategoryIntroduction";
import DatePlaceSelector from "../../components/category/DatePlaceSelector";
import EventSnippetsCourselView from "../../components/global/EventSnippetsCourselView";
import EventTimeOptions from "../../components/category/EventTimeOptions";
import VendorSnippets from "../../components/global/VendorSnippets";
import { useParams } from "react-router";

const Category = () => {
  const { catName } = useParams();

  return (
    <main>
      <CategoryIntroduction />

      <div className="container">
        <DatePlaceSelector />

        <EventSnippetsCourselView />

        <EventSnippetsCourselView />

        <VendorSnippets />

        <EventSnippetsCourselView />

        <EventTimeOptions categoryTitle={catName}/>
      </div>
    </main>
  );
};

export default Category;
