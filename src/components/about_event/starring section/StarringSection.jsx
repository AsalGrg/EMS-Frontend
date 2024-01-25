import React from "react";

const StarringSection = () => {
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
          <div className="eachStarringDiv rounded m-1">
            <div className="rounded starring-img">
              <img
                className="rounded"
                src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/316669820_1486705245141001_8411721115992888449_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cJktd2uGkiUAX_8bPuQ&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCVVFoPFJt6gBoDEyQdHwXV-nUeBVGi2dojOua2YdNiow&oe=65B44B3C"
                alt=""
              />
            </div>

            <div className="text-center mt-3">
              <p className="text-light fw-bold">Asal Gurung</p>
              <p className="text-secondary">Singer</p>
            </div>
          </div>

          <div className="eachStarringDiv rounded m-1">
            <div className="rounded starring-img">
              <img
                className="rounded"
                src="https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyJTIwcG90cmFpdHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>

            <div className="text-center mt-3">
              <p className="text-light fw-bold">Asal Gurung</p>
              <p className="text-secondary">Singer</p>
            </div>
          </div>


          <div className="eachStarringDiv rounded m-1">
            <div className="rounded starring-img">
              <img
                className="rounded"
                src="https://images.unsplash.com/photo-1527735095040-147bffb4cede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdlciUyMHBvdHJhaXRzfGVufDB8fDB8fHww"
                alt=""
              />
            </div>

            <div className="text-center mt-3">
              <p className="text-light fw-bold">Asal Gurung</p>
              <p className="text-secondary">Singer</p>
            </div>
          </div>


          <div className="eachStarringDiv rounded m-1">
            <div className="rounded starring-img">
              <img
                className="rounded"
                src="https://th.bing.com/th?id=OVFT.UmcUiYf0p0TyMb-HkKhmUy&pid=News&w=300&h=186&c=14&rs=2&qlt=90&dpr=1.3"
                alt=""
              />
            </div>

            <div className="text-center mt-3">
              <p className="text-light fw-bold">Asal Gurung</p>
              <p className="text-secondary">Singer</p>
            </div>
          </div>


          <div className="eachStarringDiv rounded m-1">
            <div className="rounded starring-img">
              <img
                className="rounded"
                src="https://www.bing.com/th?id=OIP.HUfq47OZNYlp2LXyIodlOAHaLH&w=115&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt=""
              />
            </div>

            <div className="text-center mt-3">
              <p className="text-light fw-bold">Asal Gurung</p>
              <p className="text-secondary">Singer</p>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
};

export default StarringSection;
