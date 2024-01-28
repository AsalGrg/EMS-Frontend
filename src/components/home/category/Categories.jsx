import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="mt-5">
      <h4 className="text-center mb-5">Categories</h4>
      <div className="d-flex justify-content-between mt-4">
        <Link to={`/category/music`}>
          <div>
            <div className="border rounded-circle p-4">
              <img src="public/category svgs/music.svg" alt="" />
            </div>

            <p className="text-center mt-2">Music</p>
          </div>
        </Link>

        <Link to="/category/nightlife">
          <div>
            <div className="border rounded-circle p-4">
              <img src="public/category svgs/hello.svg" alt="" />
            </div>

            <p className="text-center mt-2">Nightlife</p>
          </div>
        </Link>

        <Link to="/category/health">
          <div>
            <div className="border rounded-circle p-4">
              <img src="public/category svgs/health.svg" alt="" />
            </div>

            <p className="text-center mt-2">Health</p>
          </div>
        </Link>

        <Link to="/category/hobbies">
          <div>
            <div className="border rounded-circle p-4">
              <img src="public/category svgs/hobby.svg" alt="" />
            </div>

            <p className="text-center mt-2">Hobbies</p>
          </div>
        </Link>

        <Link to="/category/business">
          <div>
            <div className="border rounded-circle p-4">
              <img src="public/category svgs/business.svg" alt="" />
            </div>

            <p className="text-center mt-2">Business</p>
          </div>
        </Link>

        <Link to="/category/fashion">
          <div>
            <div className="border rounded-circle p-4">
              <img src="public/category svgs/fashion.svg" alt="" />
            </div>

            <p className="text-center mt-2">Fashion</p>
          </div>
        </Link>

        <Link to="category/Food & Drinks">
          <div>
            <div className="border rounded-circle p-4">
              <img src="public/category svgs/food.svg" alt="" />
            </div>

            <p className="text-center mt-2">Food & Drinks</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
