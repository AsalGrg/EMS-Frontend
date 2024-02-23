import React from "react";
import { useSelector } from "react-redux";

const StarringSection = () => {
  const formData = useSelector((state) => state.aboutEvent);

  return (
    <section className="mt-5 mb-5">
      <div
        className="p-5"
        style={{
          backgroundColor: "black",
        }}
      >
        <h4 className="text-light display-5 fw-bold text-center mt-3 mb-5">
          Event Honorables
        </h4>
        {/* each starring div */}
        <div className=" d-flex justify-content-evenly mt-5">
          {formData.starrings.map((eachStarring) => (
            <div className="eachStarringDiv rounded m-1">
              <div className="rounded starring-img">
                {formData.eventAccessType === "preview" ? (
                  <img
                    className="rounded"
                    // src={URL.createObjectURL(eachStarring.starringPhoto)}
                    alt=""
                  />
                ) : (
                  <img
                    className="rounded"
                    src="https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyJTIwcG90cmFpdHN8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                )}
              </div>

              <div className="text-center mt-3">
                <p className="text-light fw-bold">
                  {eachStarring.starringName}
                </p>
                <p className="text-secondary">Singer</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StarringSection;
