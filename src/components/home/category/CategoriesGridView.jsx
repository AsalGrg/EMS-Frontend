import React from "react";
import { Link } from "react-router-dom";
import { CategoriesToDisplay } from "./CategoriesToDisplay";


const CategoriesGridView = () => {
  return (
    <section>
      <div className="d-flex justify-content-between mt-4 ">
       {
        CategoriesToDisplay.map(eachCat=>(
            eachCat
        ))
       }
      </div>
    </section>
  );
};

export default CategoriesGridView;
