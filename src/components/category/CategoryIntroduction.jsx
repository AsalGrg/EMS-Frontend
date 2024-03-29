import React from "react";
import "./CategoryIntroduction.css";
import { introStyles } from "./CategoriesStyle";
import { useParams } from "react-router";

//other Props such as cat description, cat cover photo to be passed
const CategoryIntroduction = () => {
  const { catName } = useParams();

  const introStyle = introStyles[catName];

  return (
    <section
      className="d-flex justify-content-md-between flex-md-row-reverse align-items-center flex-column ps-5"
      style={{
        backgroundColor: introStyle.backgroundColor,
        maxHeight: "fit-content"
      }}
    >
      <div className="w-50 d-flex justify-content-center">
        <img
          src={introStyle.coverImage}
          alt=""
          className="catImg"
        />
      </div>

      <div className="text-center text-md-start px-5">
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
