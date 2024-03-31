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
        <div className=" d-flex justify-content-center mt-5 flex-wrap">
          {formData.starrings.map((eachStarring) => (
            <div className="eachStarringDiv rounded m-1 mx-5">
              <div className="rounded starring-img">
                {formData.eventAccessType === "preview" ? (
                  <img
                    className="rounded"
                    src={`data:image/png;base64,${eachStarring.starringPhoto}`}
                    // src={URL.createObjectURL(eachStarring.starringPhoto)}
                    alt=""
                  />
                ) : (
                  <img
                    className="rounded"
                    src={eachStarring.starringPhoto}
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
