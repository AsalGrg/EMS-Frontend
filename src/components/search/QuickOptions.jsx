import React from "react";
import "./QuickOptions.css";

const QuickOptions = () => {
  return (
    <>
      <section className="d-flex gap-2 flex-wrap">
        <button className="quickOption">Online</button>

        <button className=" quickOption">Today</button>

        <button className="quickOption">This weekend</button>

        <button className="quickOption">Free</button>
      </section>
    </>
  );
};

export default QuickOptions;
