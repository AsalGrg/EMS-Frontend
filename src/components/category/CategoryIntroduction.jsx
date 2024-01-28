import React from "react";
import "./CategoryIntroduction.css";
import { introStyles } from "./CategoriesStyle";
import { useParams } from "react-router";

//other Props such as cat description, cat cover photo to be passed
const CategoryIntroduction = () => {
  const { catName } = useParams();

  const introStyle = introStyles[catName];

  console.log(catName);
  console.log(introStyle);
  return (
    <section
      className="px-5 row justify-content-between align-items-center flex-row-reverse"
      style={{
        backgroundColor: introStyle.backgroundColor,
        maxHeight: "fit-content",
      }}
    >
      <div className="col-md-4 col-12">
        <img
          src={introStyle.coverImage}
          alt=""
          className="catImg"
        />
      </div>

      <div className="col-md-5 col-12 px-5 mt-2">
        <h1 className="display-4 fw-bold" style={{
            color: introStyle.textColor
        }}>{catName[0].toUpperCase()+catName.slice(1)}</h1>
        <p
        className=""
        style={{
            color: introStyle.descColor
        }}>Discover the best {catName} events in your area and online</p>
      </div>
    </section>
  );
};

export default CategoryIntroduction;
